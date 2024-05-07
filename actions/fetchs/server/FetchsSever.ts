import { useGetServerSession } from "@/hooks/auth/authHooks";
import { axiosInstanceGlobal, soundsFetch } from "@/utils/constants/Constants";
import { Artist, Comment, Sound, Sounds, User } from "@/utils/types/types";

export const findSound = async(slug: string) => await soundsFetch.get<Sound>(`/sounds/${slug}`).then((res)=>res.data);
export const allSounds= async() => await soundsFetch.get<Sound[]>(`/sounds`).then((res)=>res.data);

export const allartist= async() => await soundsFetch.get(`/artists`).then((res)=>res.data);
export const findArtist= async(id: string) => await soundsFetch.get<Artist>(`/artists/${id}`).then((res)=>res.data);


export const findUsers = async(slug?: string)=>{
    const session = await useGetServerSession()
    const res = await axiosInstanceGlobal.get<User>(`/user${slug && '/'+slug}`,{
            headers:{
                Authorization: `Bearer ${session?.backendTokens.accessToken}`
            }
        })
    return res.data
}


export const appSounds= async()=>{
    return (await axiosInstanceGlobal.get<Sound[]>('/sounds')).data.map((sound)=> sound.slug)
}
export const appSound= async(slug: string)=>{
    return (await axiosInstanceGlobal.get<Comment>(`/comments/${slug}`)).data
}
export const getCommments= async(slug: string)=>{
    return (await axiosInstanceGlobal.get<Comment[]>(`/comments/${slug}`)).data
}
export const addPostComments= async(comment: Comment)=>{
    await axiosInstanceGlobal.post(`/comments/`, comment)
}

export const addDownloads= async(slug: string)=>{
    await axiosInstanceGlobal.post(`/queries/downloads/${slug}`)
}
export const updateComment= async(id: number,comment: Comment)=>{
    await axiosInstanceGlobal.put(`/comments/${String(id)}`, comment)
}

export const getSounds= async(url: string)=>{
    return (await axiosInstanceGlobal.get<Sound[]>(`/${url}`)).data
}

export const getDownloads= async(url: string)=>{
    return (await axiosInstanceGlobal.get<Sound>(`/${url}`)).data
}

export const FetchGlobal = (url: string) => soundsFetch.get(url).then((res) => res.data);