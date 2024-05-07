import { BACKEND_URL, axiosInstanceGlobal } from "@/utils/constants/Constants"
import { InferRegisterForm } from "@/utils/form/InferForm"
import { SchemaRegisterForm } from "@/utils/schemas/SchemRegisterForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function SingUpAxios() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InferRegisterForm>({
        resolver: zodResolver(SchemaRegisterForm),
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)

    const singUpA = async (data: InferRegisterForm) => {
        const validate = SchemaRegisterForm.parse(data)
        if(validate.password != validate.confirmPassword){
            return setError("Palavras Passes não confirmadas")
        }
        try {
            setLoading(true)
            setError(null)
          const res = await axiosInstanceGlobal.post(`${BACKEND_URL}auth/register`, {
                username: data?.username,
                email: data?.email,
                password: data?.password
            })
            setResult("Conta criada com sucesso")
            console.log(res.data)
            console.log(res)
            reset()
        } catch (error) {
            setError(`Este email já registrado`)
            console.log(`Aconteceu algo: ${error}`)
        }finally{
            setLoading(false)
        }

    }

    return {singUpA, loading, error, register, handleSubmit, errors, result,setError }
}