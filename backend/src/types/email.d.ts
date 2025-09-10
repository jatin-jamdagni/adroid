export type EmailTemplates = {
  otp: {
    otp: string;
    validity: string;
  };
  welcome: {
    name: string;
    loginLink: string;
  };
};
