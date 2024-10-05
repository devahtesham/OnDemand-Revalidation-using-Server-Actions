"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { REVALIDATE_TAGS } from "../tags"
import { redirect } from "next/navigation"

export async function revalidateUsers(formData){
    console.log('[FORMDATA]',formData)
    revalidateTag(REVALIDATE_TAGS['USERS'])
    redirect('/')
}

export async function revalidateProducts(){
    revalidateTag(REVALIDATE_TAGS['PRODUCTS'])
    redirect('/')
}

export async function revalidateAll() {
    revalidatePath('/')
    redirect('/')
    
}