
"use client";

import Link from 'next/link';
import {use} from "react";

export default function NewArticle({params , searchParams} : {
    params : Promise<{articleId : string}>;
    searchParams : Promise<{lang?: "en" | "es" | "fr"}>;
}) {

    const {articleId} = use(params);

    const {lang = "en"} = use(searchParams);

    return (
        <div>
            <h1>News article {articleId}</h1>   
            <p>Reading in {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link> <br />
            <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link> <br />
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>

        </div>
    )
}

// هنا كان بيشرح بتجيب ال id بتاع المقالات لو كان انجليزي او اسباني او فرنساوي و بتجيب من ال url المسار اللي موجود في الصفحة و بتعرضه عندك في الموقع