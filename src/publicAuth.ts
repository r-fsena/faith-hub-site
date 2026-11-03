import { Amplify } from "aws-amplify";
import { fetchAuthSession } from "aws-amplify/auth";
// Public client identifiers, shared with the Studio. Passwords/tokens never go to acquisition APIs.
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_pLrj1NgHI",
      userPoolClientId: "3ik571j3u4o4sb13bo7n4o9822",
      loginWith: { email: true },
    },
  },
});
export async function ownerHeaders() {
  const session = await fetchAuthSession();
  const token = session.tokens?.idToken?.toString();
  if (!token) throw Error("Entre com sua conta para continuar.");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
export const JOURNEY_API =
  import.meta.env.VITE_API_URL ||
  "https://usl72lj2m5.execute-api.us-east-2.amazonaws.com";
export async function journeyRequest(path: string, body?: unknown) {
  const response = await fetch(`${JOURNEY_API}/public/journey${path}`, {
    method: body === undefined ? "GET" : "POST",
    headers: await ownerHeaders(),
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await response.json();
  if (!response.ok)
    throw Error(data.message || "Não foi possível concluir. Tente novamente.");
  return data;
}
