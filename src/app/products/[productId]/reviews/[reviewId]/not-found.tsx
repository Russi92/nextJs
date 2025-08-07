"use client";

import { usePathname } from "next/navigation"

export default function NotFound() {

    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return(<>
                <div className="text-center">Review {reviewId} not found for product {productId}</div>
           </>)
}

// not found page