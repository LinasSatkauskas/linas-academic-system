import { Wrapper } from "@/components/certificates/wrapper"
import { ICertType } from "@/models/certType.model"
import { getApi } from "@/utils/serverApi"

export default async function CertificatePage() {
  const certTypes = await getApi<ICertType[]>(
    `/api/classificators/certificates`
  )
  return <Wrapper certTypes={certTypes} />
}
