import React, { ReactNode } from 'react'

type CardPropsType = {
    children?: ReactNode
}

export default function Card({ children }: CardPropsType) {
    return (
        <div style={{
            padding: 20,
            boxShadow: "0 0 5px #999999",
            flex:'0 0 350px',
            borderRadius:'10px',
            marginBottom:'20px'
        }}>{children}</div>
    )
}