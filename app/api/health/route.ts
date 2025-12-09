import { NextResponse } from "next/server";

console.log("BOOT MODULE LOADED at", new Date().toISOString());

export async function GET() {
  console.log("BOOT GET invoked at", new Date().toISOString());
  return NextResponse.json({ ok: true, time: Date.now() });
}