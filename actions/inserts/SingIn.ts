import { InferLoginForm} from "@/utils/form/InferForm"
import { SchemaLoginForm } from "@/utils/schemas/SchemLoginForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter,redirect } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { signIn } from 'next-auth/react'
import { z } from "zod"

export default function SingIn() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InferLoginForm>({
        resolver: zodResolver(SchemaLoginForm),
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)
    const router = useRouter()
    const singIn = async (data: z.infer<typeof SchemaLoginForm>) => {

        const res = await signIn("credentials", {
            username: data.email, password: data.password, redirect: false
        }).then(function (r) {
            setLoading(true)
            setError(null)
            console.log(r?.error)
            console.log(r)
            if (!r?.ok) {
                return setError(`Dados Ivalidos, verfique a passe ou email`)
            }
            if (r?.ok) {
                reset()
                setResult("Login Efetuado com sucesso")
                return redirect('/dashboard')
            }
        }).catch(function (error) {
            console.log(error)
            setError("Dados Ivalido22s")
        }).finally(function () {
            setLoading(false)
        })

    }

    return { singIn, loading, error, register, handleSubmit, errors, result, setError }
}