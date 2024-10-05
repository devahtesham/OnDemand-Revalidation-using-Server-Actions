import { fetchUsers } from '@/utils/products'
import React from 'react'

async function Users() {
  const users = await fetchUsers()
  return (
    users.map((user)=>(<h5 key={user.userId}>{user.title}</h5>))
  )
}

export default Users