import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import { extname, join } from "path";

export async function Upload(file: File, folder: string) {
    let uui = randomUUID()
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const esxt = extname(file.name)
    try {
        const path = join('./', `uploads/${folder}`, `${uui}${esxt}`)
        console.log(file.size);
        if(file.size >= 518080) return false
        await writeFile(path, buffer)
        GetFileName(`${uui}${esxt}`);
        return true;
    } catch (error) {
        console.log("erro: ", error)
        return false;
    }
}
export let FileName: string | null = null;
export function GetFileName(fileName: string){
    FileName = fileName;
}
export function FileNameUpload(){
        return FileName;
}

