import { ICertificate } from "@/models/certificate.model"
import { CertificateService } from "@/services/CertificateService"
import { NextRequest } from "next/server"

export async function PUT(
  request: NextRequest,
  res: { params: { certificateId: string } }
) {
  const certificate: ICertificate = await request.json()
  const certificateService = new CertificateService()
  await certificateService.updateCertificate(certificate)
  return Response.json({ message: "Pakeitimas sėkmingai įvykdytas" })
}
