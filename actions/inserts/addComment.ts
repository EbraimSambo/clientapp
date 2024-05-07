import { addComments } from "@/hooks/queries/Tantas"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"

export function useCreateomment(){
    const route = useRouter()
    const create = addComments()
    const { register, handleSubmit, reset } = useForm<Comment>()
    const hundler: SubmitHandler<Comment> = (data) => {
      create.mutate(data)
      console.log(create.isSuccess)
      if (create.isSuccess) {
        reset()
        route.refresh()
      }
    }

    return {hundler,register, handleSubmit, create }
}

