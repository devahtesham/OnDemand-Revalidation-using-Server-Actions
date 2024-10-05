export interface PRODUCT {
    id: number
    name: string
    price: number
}

export interface USERS {
    userId: number
    id: number,
    title: string,
    completed: boolean
}

export const allProducts: PRODUCT[] = [
    {
        id: 1,
        name: "Shirt",
        price: 2000
    },
    {
        id: 2,
        name: "T-Shirt",
        price: 2000
    },
    {
        id: 3,
        name: "Women Shirt",
        price: 2000
    },
    {
        id: 4,
        name: "Boy Shirt",
        price: 2000
    },
    {
        id: 5,
        name: "Child Shirt",
        price: 2000
    },
]

export const fetchUsers = async (): Promise<USERS[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    return data
}
