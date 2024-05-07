import { axiosInstanceGlobal } from "@/utils/constants/Constants";

export async function deleteComment(id: number){
    await axiosInstanceGlobal.delete(`comments/${id}`)
}