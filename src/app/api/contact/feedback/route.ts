import { NextResponse } from 'next/server';

export const maxDuration = 5;

export async function POST(req: Request) {
  const data = await req.json();

  console.log(data);

  return NextResponse.json({ name: data?.name });
}
