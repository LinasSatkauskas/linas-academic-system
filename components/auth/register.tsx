import { signUpAction } from "@/actions/signupAction"
import { SubmitButton } from "@/components/parts/submitButton"
import { TextField } from "@/components/parts/textField"
import { registerDto } from "@/dto/registerDto"
import { IState } from "@/types/shared.t"
import { useRouter } from "next/navigation"
import { useFormState } from "react-dom"

export function Register() {
  const [state, formAction] = useFormState<IState, FormData>(
    signUpAction,
    registerDto
  )
  const router = useRouter()
  if (state.isSaved) {
    router.push("/")
  }

  return (
    <form className="space-y-12 w-full sm:w-96" action={formAction}>
      <div className="grid w-full items-center gap-1.5">
        <TextField
          label="El. paštas"
          name="email"
          isRequired={true}
          type="email"
          errors={state?.errors?.email}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <TextField
          label="vardas"
          name="username"
          isRequired={true}
          errors={state?.errors?.username}
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <TextField
          label="Slaptažodis"
          name="password"
          isRequired={true}
          type="email"
          errors={state?.errors?.password}
        />
      </div>
      <div className="w-full">
        <SubmitButton name="Registruotis" />
      </div>
      <div
        className={`my-2 text-sm italic p-1 ${
          state?.errors ? "bg-red-100" : state?.message ? "bg-green-100" : ""
        }`}
      >
        {state?.message}
      </div>
    </form>
  )
}
