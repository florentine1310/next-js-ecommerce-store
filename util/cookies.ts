import { cookies } from 'next/headers';

export async function getCookie(name: string) {
  const cookie = (await cookies()).get(name);
  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}
