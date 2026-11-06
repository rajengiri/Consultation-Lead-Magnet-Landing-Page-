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
  action: "https://form.flodesk.com/forms/6aeddbfeac8d889a11e87779/submit",
  successRedirect: "https://consultation.digitalrajen.com/thank-you",
  encodedConfig:
    "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiIiLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vY29uc3VsdGF0aW9uLmRpZ2l0YWxyYWplbi5jb20vdGhhbmsteW91In0sImNvaSI6dHJ1ZSwic2hvd0ZvclJldHVyblZpc2l0b3JzIjp0cnVlLCJub3RpZmljYXRpb24iOnRydWUsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=",
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
