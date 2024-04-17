import { ISemester } from "@/types/semester.t"
import { type NextRequest } from "next/server"

const semestersDb: ISemester[] = [
  { id: 1, name: "Pirmas" },
  { id: 2, name: "Antras" },
]
export function GET(request: NextRequest) {
  return Response.json(semestersDb)
}
