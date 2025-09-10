
import otpGenerator from 'otp-generator'
  
// ✅ Correct typing + default value
export const generateOTP = (count: number = 6): string => {
  return otpGenerator.generate(count, {
    digits: true,
    lowerCaseAlphabets: false,
    specialChars: false,
    upperCaseAlphabets: false,
  });
};
