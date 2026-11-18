export type LeadData = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
  company: string;
};

export const flodeskFormConfig = {
  id: "6aeddbfeac8d889a11e87779",
  rootClass: "ff-6aeddbfeac8d889a11e87779",
  action: "/api/flodesk/submit",
  submitEndpoint: "https://form.flodesk.com/forms/6aeddbfeac8d889a11e87779/submit",
  successRedirect: "https://consultation.digitalrajen.com/thank-you",
  fieldNames: {
    fullName: "firstName",
    email: "email",
    whatsapp: "fields.whatsappNumber",
    businessName: "fields.companyBusinessName",
    website: "fields.websiteOrFacebookUrl",
    message: "fields.anythingYouWantToSay",
    honeypot: "confirm_email_address",
  },
} as const;
