
import styles from "./page.module.css"
import Users from "@/components/Users/Users";
import Products from "@/components/Products/Products";
import { revalidateAll } from "@/utils/actions/action";

// export const dynamic = 'force-dynamic'

export default function Home() {
  // console.log("[HOME PAGE IS RENDER]")
  return (
    <>
      <div className={styles.container}>
        <div style={{
          marginTop: 30,
          marginBottom: 40,
          textAlign: 'end'
        }}>
          <form action={revalidateAll}>
            <button className={styles.btn}>Revalidate Path</button>
          </form>
        </div>
        <Users />
        <Products />
      </div>
    </>
  );
}
