import { renderTemplate, transporter } from "../config/email";
import { EmailTemplates } from "../types/email";

export async function sendEmail<T extends keyof EmailTemplates>({
  to,
  subject,
  template,
  data,
}: {
  to: string;
  subject: string;
  template: T;
  data: EmailTemplates[T];
}) {
  try {
    const html = renderTemplate(template, data);

    const info = await transporter.sendMail({
      from: `"Trader" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log(`✅ Email sent to ${to}: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw new Error("Email service error: " + (error as Error).message);
  }
}
