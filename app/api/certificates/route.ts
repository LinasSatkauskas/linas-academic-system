import { myDb } from "@/app/layout"
import { type NextRequest } from "next/server"

export function GET(request: NextRequest) {
  return Response.json(myDb.certificates)
}

export async function POST(request: NextRequest) {
  const res = await request.json()
  const myCertificates = myDb.certificates
  res.id = myCertificates.length + 1
  myCertificates.push(res)
  return Response.json({ message: "Duomenys išsaugoti" })
}
