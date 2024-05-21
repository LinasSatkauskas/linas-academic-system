import { AuthNav } from ".authNav"
import { Nav } from "./nav"
import { INav } from "@/types/nav.t"

const menu: INav[] = [
  { title: "Pažymėjimai", slug: "certificates" },
  { title: "Studijų dalykai", slug: "subjects" },
  { title: "Studentai", slug: "students" },
]

export async function Header() {
  return (
    <header className="border-b border-gray-400 p-1 mb-5 grid grid-flow-col gap-x-4 justify-between items-center">
      <Nav menu={menu} />
      <AuthNav />
    </header>
  )
}
