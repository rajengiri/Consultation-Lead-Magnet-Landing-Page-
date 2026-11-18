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
    "eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiIiLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vY29uc3VsdGF0aW9uLmRpZ2l0YWxyYWplbi5jb20vdGhhbmsteW91In0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjpmYWxzZSwiZ2RwciI6eyJhY2NlcHRzTWFya2V0aW5nIjpmYWxzZSwicHJpdmFjeVBvbGljeSI6eyJlbmFibGVkIjpmYWxzZSwibWFuZGF0b3J5IjpmYWxzZX19LCJ0cmFja2luZ0NvbmZpZyI6eyJtZXRhUGl4ZWxJZCI6IiIsImNvb2tpZUJhbm5lckVuYWJsZWQiOmZhbHNlLCJnb29nbGVBbmFseXRpY3NJZCI6IiJ9fQ==",
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
