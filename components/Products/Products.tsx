import * as React from 'react';
import styles from "@/app/page.module.css"
import Card from '../Card';
import { fetchProducts } from '@/utils/global';
import { revalidateProducts } from '@/utils/actions/action';

export default async function Products() {
    // console.log("[Products PAGE IS RENDER]")
    const products = await fetchProducts();
    return (
        <section className="products">
            <form action={revalidateProducts} style={{ textAlign: 'end' }}>
                <button className={styles.btn}>Revalidate Products</button>
            </form>
            <h3>Products</h3>
            <div className="user-content" style={{
                marginTop: 20,
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly'
            }}>
                {
                    products.map((product) => <Card key={product.id}>{product.name} {product.id}</Card>)
                }
            </div>
        </section>
    );
}
