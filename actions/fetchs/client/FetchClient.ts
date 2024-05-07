import { useGetServerSession } from "@/hooks/auth/authHooks";
import { soundsFetch } from "@/utils/constants/Constants"
export const FetchGlobal = (url: string) => soundsFetch.get(url).then((res) => res.data);

export const FetcUser = async (url: string) => {
    const session = await useGetServerSession()
    soundsFetch.get(url, {
        headers: {
            Authorization: `Bearer ${session?.backendTokens.accessToken}`
        }
    }).then((res) => res.data)
}