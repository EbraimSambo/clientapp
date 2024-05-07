"use server"

import { cookies } from "next/headers"

export async function CookieStep(slugcookie: string){
    const cookie = cookies()
    cookie.set('steptwo', slugcookie)
}