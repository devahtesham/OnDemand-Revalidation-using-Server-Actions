import { REVALIDATE_TAGS } from "./tags"

export const getRandomNumber = (): number => {
    return Number(Math.random().toFixed(1))
}

export interface USER_TYPE {
    name: string
    age: number
    id: string
}
export interface PRODUCT_TYPE {
    name: string
    age: number
    id: string
}

// fetch users
export async function fetchUsers(): Promise<USER_TYPE[]> {
    const response = await fetch("https://6701192eb52042b542d6c183.mockapi.io/api/users",{
        next:{
            tags:[REVALIDATE_TAGS['USERS']]
        }
    });
    const data = await response.json();
    return data
}

// products
export async function fetchProducts(): Promise<PRODUCT_TYPE[]> {
    const response = await fetch("https://6701192eb52042b542d6c183.mockapi.io/api/products",{
        next:{
            tags:[REVALIDATE_TAGS['PRODUCTS']]
        }
    });
    const data = await response.json();
    return data
}