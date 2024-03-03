import { SemesterSubjects } from "@/components/subjects/semesterSubjects"

export default function SubjectPage() {
  return (
    <div className="grid grid-flow-row gap-4">
      <h1 className="font-bold text-xl">Semestro dalykai</h1>
      <SemesterSubjects />
    </div>
  )
}
