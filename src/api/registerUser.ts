import {
  USER_ROLE,
  USER_STATUS,
  USER_VERIFICATION_STATUS,
} from "@/constants/enum";

interface SendOtpRequest {
  phoneNumber?: string;
  email?: string;
}

interface verifyOtpRequest {
  otp: string;
  phoneNumber?: string;
  mail?: string;
}

interface OtpResponse {
  phoneNumber?: string;
  email?: string;
  name?: string;
  timeout: string;
}
// interface LoginResponse extends IUserLogin {
//   access_token: string;
// }

export interface IRegisterUser {
  firstName: string;
  lastName: string;
  name: string;
  mail?: string;
  phoneNumber?: string;
  password?: string;
  role?: USER_ROLE;
  status?: USER_STATUS;
  verificationStatus?: USER_VERIFICATION_STATUS;
  imageUrl?: string;
  // school?: string | ISchoolDocument;
  lastLoginAt?: Date;
  platform?: string;
  country?: string;
  city?: string;
  birthdayDate?: Date | string;
  anniversaryDate?: Date | string;
  agreedToTerms: boolean;
}

export async function registerUser(userData: IRegisterUser) {
  const body = {
    ...userData,
    password: "pass123",
    birthdayDate:
      userData.birthdayDate instanceof Date
        ? userData.birthdayDate.toISOString()
        : userData.birthdayDate,
    anniversaryDate:
      userData.anniversaryDate instanceof Date
        ? userData.anniversaryDate.toISOString()
        : userData.anniversaryDate,
  };

  try {
    const url = "http://localhost:8080/api/auth/user-registration";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    console.log(body, "============= request body");
    const res = await fetch(url, options);

    const response = await res.json();

    if (response.token) {
      localStorage.setItem("Token", `Bearer ${response.token}`);
    }
    if (res.status == 201 || res.status == 200) {
      window.location.href = "/";
    }

    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
