import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const required = ["brideName", "groomName", "phone", "email", "weddingDate", "city", "services"];
    for (const field of required) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const submission = {
      ...data,
      submittedAt: new Date().toISOString(),
    };

    const leadsDir = path.join(process.cwd(), "data", "leads");
    await mkdir(leadsDir, { recursive: true });
    const filename = `lead-${Date.now()}.json`;
    await writeFile(
      path.join(leadsDir, filename),
      JSON.stringify(submission, null, 2)
    );

    // Optional: forward to Formspree when FORMSPREE_ENDPOINT is set
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
