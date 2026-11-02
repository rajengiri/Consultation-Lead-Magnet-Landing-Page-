export type LeadData = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
  company: string;
};

export async function submitLead(data: LeadData): Promise<void> {
  // Honeypot: do not process obvious bot submissions.
  if (data.company) return;

  if (process.env.NODE_ENV === "development") {
    console.warn(
      "Digital Rajen: this form is a demo. Leads are NOT being saved. Connect a backend before launch.",
    );
  }

  // TODO: Replace this simulation with the real backend call to Google Sheets, a CRM, or an API route.
  await new Promise((resolve) => setTimeout(resolve, 650));
}
