 export enum USER_ROLE {
    ADMIN = 'admin',
    USER = 'user'
 }



export enum USER_STATUS {
  ACTIVE = 'active',
  BLOCK = 'block',
}

export enum USER_VERIFICATION_STATUS {
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected',
}

export enum OTP_TYPES {
  MOBILE = 'mobile',
  EMAIL = 'email',
  BOTH = 'mobile-email',
}

export enum OTP_STATUS {
  CREATED = 'created',
  PENDING = 'pending',
  FAILURE = 'failure',
  SUCCESS = 'success',
}