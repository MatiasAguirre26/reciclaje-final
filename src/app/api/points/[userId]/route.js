import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req, {params}) {
  const { userId } = params;
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  const tokenJson = JSON.parse(token);
  const response = await fetch(`${process.env.BACKEND_API_URL}/users/${userId}/points`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenJson}`,
    },
  });
  const data = await response.json();
  return NextResponse.json(data);
}

//export async function PUT(req, {params}) {
//  const { userId } = params;
//  const cookieStore = cookies();
//  const token = cookieStore.get('token')?.value;
//  const tokenJson = JSON.parse(token);
//  const response = await fetch(`${process.env.BACKEND_API_URL}/users/${userId}/points`, {
//    method: 'PUT',
//    headers: {
//      'Content-Type': 'application/json',
//      Authorization: `Bearer ${tokenJson}`,
//    },
//    body: JSON.stringify(req.body),
//  });
//  const data = await response.json();
//  return NextResponse.json(data);
//}

export async function PUT(req, { params }) {
  const { userId } = params;
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  // guard clausee 
  if (!token) {
    return NextResponse.json({ success: false, error: 'Falta el token', data: null });
  }

  let tokenJson;
  try {
    tokenJson = JSON.parse(token);
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Token inválido', data: null });
  }

  const response = await fetch(`${process.env.BACKEND_API_URL}/users/${userId}/points`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenJson}`,
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  return NextResponse.json(data);
}