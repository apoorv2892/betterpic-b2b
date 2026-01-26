import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  teamSize: string;
  mainUseCase: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

      const { firstName, lastName, email, companyName, teamSize, mainUseCase } = formData;

      if (!firstName || !lastName || !email || !companyName || !teamSize || !mainUseCase) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let attioRecordId = null;
    let attioSynced = false;

    try {
      const attioResponse = await fetch(
        "https://api.attio.com/v2/objects/people/records",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.ATTIO_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
            body: JSON.stringify({
              data: {
                values: {
                  email_addresses: [
                    {
                      email_address: email,
                    }
                  ],
                  name: [
                    {
                      first_name: firstName,
                      last_name: lastName,
                      full_name: `${firstName} ${lastName}`,
                    }
                  ],
                  description: [
                    {
                      value: `Company: ${companyName}\nTeam Size: ${teamSize}\nMain Use Case: ${mainUseCase}`,
                    }
                  ],
                }
              }
            }),
        }
      );

      if (attioResponse.ok) {
        const attioData = await attioResponse.json();
        attioRecordId = attioData.id?.record_id || null;
        attioSynced = true;
      } else {
        const errorText = await attioResponse.text();
        console.error("Attio API error:", errorText);
      }
    } catch (attioError) {
      console.error("Failed to sync with Attio:", attioError);
    }

      const { data: supabaseData, error: supabaseError } = await supabase
        .from("form_submissions")
        .insert([
          {
            name: `${firstName} ${lastName}`,
            email,
            phone: null,
            company_name: companyName,
            team_size: teamSize,
            project_type: mainUseCase,
            message: null,
            attio_synced: attioSynced,
            attio_record_id: attioRecordId,
          },
        ])
        .select()
        .single();

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      return NextResponse.json(
        { error: "Failed to save submission", details: supabaseError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Quote request submitted successfully",
      attioSynced,
      data: supabaseData,
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
