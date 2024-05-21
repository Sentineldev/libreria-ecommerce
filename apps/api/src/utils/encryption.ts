import { compare, hash } from 'bcrypt';

export async function HashValue(value: string): Promise<string> {
  const saltRounds = 10;
  return await hash(value, saltRounds);
}

export async function CheckHashedValue(
  hashedValue: string,
  plainValue: string,
): Promise<boolean> {
  return compare(plainValue, hashedValue);
}
