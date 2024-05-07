import { BACKEND_URL } from "@/utils/constants/Constants";
import { InferCreateSound } from "@/utils/form/InferForm";
import { SchemaCreateSound } from "@/utils/schemas/SchemaCreateSound";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useCreateSound(slug: string) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InferCreateSound>({
        resolver: zodResolver(SchemaCreateSound),
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<string | null>(null)

    const create = async(data: FormData | any) => {
        const fileCover = new FormData();
        const fileAudio = new FormData();
        fileCover.set('coverPath', data.coverPath)
        fileAudio.set('audioPath', data[0])
        await axios.postForm( BACKEND_URL+`sounds/${slug}`, {
            title: data.title,
            artist: data.artist,
            description: data.description,
            category: data.category,
            coverPath: data.coverPath,
            audioPath: data.audioPath,
        }, {
            headers: {
                Authorization: `Bearer jhsdhgdsjsdhsdshdsj`,
            }
        }) .then(function (response) {
            setLoading(true)
            setError(null)
            setResult("Música Guardada com sucesso")
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