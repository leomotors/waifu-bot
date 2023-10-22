export const authFailReason = {
  notauthenticated: "You are not authenticated, please login.",
  invalidjwtcontent: "Session expired, please login again.",
  how: "Unexpected error",
} as const;

export type AuthFailReason = keyof typeof authFailReason;
