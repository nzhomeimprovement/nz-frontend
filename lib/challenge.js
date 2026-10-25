import crypto from "crypto";

const CHALLENGE_TTL_MS = 5 * 60 * 1000;
const secret = process.env.CHALLENGE_SECRET || "dev-only-insecure-challenge-secret";

export function createChallenge() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const expiry = Date.now() + CHALLENGE_TTL_MS;
  const token = sign(a, b, expiry);
  return { a, b, expiry, token };
}

export function verifyChallenge({ a, b, expiry, token, answer } = {}) {
  if (!a || !b || !expiry || !token || answer === undefined || answer === null || answer === "") {
    return false;
  }
  if (Date.now() > Number(expiry)) return false;

  const expected = sign(a, b, expiry);
  if (!timingSafeEqual(expected, String(token))) return false;

  return Number(answer) === Number(a) + Number(b);
}

function sign(a, b, expiry) {
  return crypto.createHmac("sha256", secret).update(`${a}:${b}:${expiry}`).digest("hex");
}

function timingSafeEqual(a, b) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}
