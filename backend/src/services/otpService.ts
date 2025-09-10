import Otp, { OTPTypeProps, IOtp } from "../models/Otp";
import { sendEmail } from "./emailService";
 const otpSubjects: Record<OTPTypeProps, string> = {
  phone: "Your Phone Verification OTP",
  email: "Your Email Verification OTP",
  reset_password: "Reset Your Password - OTP Code",
  reset_pin: "Reset Your Login PIN - OTP Code",
};

export async function sendAndSaveOtp(
  email: string,
  otp: string,
  otp_type: OTPTypeProps
): Promise<IOtp> {
  await sendEmail({
    template: "otp",
    data: { otp, validity: "5" },
    subject: otpSubjects[otp_type],
    to: email,
  });

  const otpDoc = new Otp({ email, otp, otp_type });
  await otpDoc.save();

  return otpDoc;
}



export async function verifyOtp(
  email: string,
  otp: string,
  otp_type: OTPTypeProps
): Promise<boolean> {
  const otpDoc = await Otp.findOne({
    email, otp_type
  })


  if (!otpDoc) {
    throw new Error("No OTP found or already expired");
  }

  if (otpDoc.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  await Otp.deleteOne({ _id: otpDoc._id });

  return true;
}




 