"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

type BUTTON_TYPE = {
    text: string
    path: string
}

function Button({ text, path }: BUTTON_TYPE) {
    const router = useRouter()
    const handleClick = (): void => {
        router.push(path)
    }
    return (
        <div onClick={handleClick}>{text}</div>
    )
}

export default Button