

// export default function ProductDetails () {
//     return <>
//                 <h1>Details about Products</h1>
//            </>
// }

import { Metadata } from "next";

type props = {
    params : Promise<{productId: string }>;
}

export const generateMetadata = async ({
    params , 
}: props) : Promise<Metadata> =>  {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`)
        })
    })
    return {
        title : `product ${title}`
    }
}

export default async function ProductDetails ({params} : props) {
    const productId = (await params).productId;
    return <>
              <h1>Details about Products {productId}</h1>
       </>
}

// dyanmic Route