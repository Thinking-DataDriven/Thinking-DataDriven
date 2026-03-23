export const AUTH_COOKIE_NAME = "thinking_os_session";

export function getSessionSecret() {
  return process.env.SITE_SESSION_SECRET || "thinking-os-session-secret";
}

export function getSiteLogin() {
  return process.env.SITE_LOGIN || "admin";
}

export function getSitePassword() {
  return process.env.SITE_PASSWORD || "mindos";
}
