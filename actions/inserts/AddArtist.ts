import { BACKEND_URL } from "@/utils/constants/Constants";
import { InferCreateArtist} from "@/utils/form/InferForm";
import { ArtistSchema } from "@/utils/schemas/ArtistSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useCreateArtist() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InferCreateArtist>({
        resolver: zodResolver(ArtistSchema),
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)

    const create = async(data: FormData | any) => {
        const fileCover = new FormData();
        fileCover.set('coverPath', data.coverPath)
        await axios.postForm(BACKEND_URL+`artists`, {
            name: data.name,
            coverPath: data.coverPath,
        }, {
            headers: {
                Authorization: `Bearer jhsdhgdsjsdhsdshdsj`,
            }
        }) .then(function (response) {
            setLoading(true)
            setError(null)
            setResult("Artista Criado com Sucesso")
                console.log(response);
                console.log(response.data);
                reset()
            })
            .catch(function (error) {
                setError(`Algo deu erado`)
                console.log(error);
            }).finally(function(){
                setLoading(false)
            });
    }

    return {create, loading, error, register, handleSubmit, errors, result,setError }
}