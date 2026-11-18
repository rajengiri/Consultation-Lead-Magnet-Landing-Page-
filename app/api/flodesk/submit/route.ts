import { NextResponse } from "next/server";
import { flodeskFormConfig } from "@/lib/submitLead";

const requiredFields = [
  flodeskFormConfig.fieldNames.fullName,
  flodeskFormConfig.fieldNames.email,
  flodeskFormConfig.fieldNames.whatsapp,
  flodeskFormConfig.fieldNames.businessName,
] as const;

function redirectToFormWithError(request: Request) {
  return NextResponse.redirect(new URL("/?submission=failed#form", request.url), 303);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = new URLSearchParams();

    for (const [name, value] of formData.entries()) {
      if (typeof value === "string") payload.append(name, value);
    }

    if (requiredFields.some((name) => !payload.get(name)?.trim())) {
      return redirectToFormWithError(request);
    }

    if (payload.get(flodeskFormConfig.fieldNames.honeypot)?.trim()) {
      return NextResponse.redirect(flodeskFormConfig.successRedirect, 303);
    }

    const response = await fetch(flodeskFormConfig.submitEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: new URL("/#form", flodeskFormConfig.successRedirect).toString(),
      },
      body: payload.toString(),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const providerResponse = new URL(response.url);
    const verifiedSubmission =
      response.ok && providerResponse.pathname.startsWith(`/forms/${flodeskFormConfig.id}/verify/`);
    if (providerResponse.searchParams.get("status") === "success" || verifiedSubmission) {
      return NextResponse.redirect(flodeskFormConfig.successRedirect, 303);
    }

    console.error("Flodesk rejected the consultation form submission", {
      status: response.status,
      redirectStatus: providerResponse.searchParams.get("status"),
      verifiedRouteSeen: providerResponse.pathname.startsWith(`/forms/${flodeskFormConfig.id}/verify/`),
    });
    return redirectToFormWithError(request);
  } catch {
    console.error("Flodesk consultation form submission failed before confirmation");
    return redirectToFormWithError(request);
  }
}
