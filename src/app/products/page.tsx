
import Link from "next/link"


export default function ProductsList () {

    const productId = 100;

    return <>
        <Link href="/">Home</Link>
        <h1>Products Lists</h1>

        <h2>
            <Link href="/products/1">product 1</Link>
        </h2>

        <h2>
            <Link href="/products/2">product 2</Link>
        </h2>

        <h2>
            <Link href="/products/3" replace>product 3</Link>
        </h2>

        <h2>
            <Link href={`/products/${productId}`}>product {productId}</Link>
        </h2>
    </>
}

// replace ده بتمسح ال history بتاعة الصفحة اللي قبليها يعني لو كنت في صفحة معينة و عملت رجوع هيرجعك في صفحة ال home