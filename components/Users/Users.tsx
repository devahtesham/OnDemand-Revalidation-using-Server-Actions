import * as React from 'react';
import Card from '../Card';
import styles from "@/app/page.module.css"
import { fetchUsers } from '@/utils/global';
import { revalidateUsers } from '@/utils/actions/action';

export default async function Users() {
  // console.log("[Users PAGE IS RENDER]")
  const users = await fetchUsers();
  return (
    <section className="users" style={{ marginBottom: 50 }}>
      <form action={revalidateUsers} style={{ textAlign: 'end' }}>
        <button className={styles.btn}>Revalidate Users</button>
      </form>
      <h3>Users</h3>
      <div className="user-content" style={{
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}>
        {
          users.map((user) => <Card key={user.id}>{user.name}</Card>)
        }

      </div>
    </section>
  );
}
