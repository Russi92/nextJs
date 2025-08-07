

// export default function Docs() {
//     return <h1>Docs home page</h1>
// }

export default async function Docs ({params ,} : {
    params : Promise<{slug : string[]}>
}) {
    const {slug} = await params;
    if (slug?.length === 2 ) {
        return (
            <h1>viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
        );
    } else if (slug?.length === 1) {
        return <h1>viewing docs for feature {slug[0]}</h1>
    }
    return <h1>Docs home page</h1>
}

// catch all segments

// [...slug] لو جيت تعرض ال url بتاعك هيجيب error 404 not found
// [...slug]
// معناها: "هاتلي كل اللي في اللينك بعد المسار ده"

// لكنها لا تقبل اللينك الفاضي

// يعني لو عامل صفحة على /docs/[...slug]:

// localhost:3000/docs/react/hooks ✅ يشتغل

// localhost:3000/docs ❌ مش هيشتغل، هيدي 404




// [[...slug]] لو جيت تعرض ال url بتاعك هيعرضها عادي و مش هيحيب error 
// معناها: نفس الكلام، لكن تقبل كمان لو مفيش حاجة بعد المسار

// يعني لو عامل /docs/[[...slug]]:

// localhost:3000/docs/react/hooks ✅ يشتغل

// localhost:3000/docs ✅ برضو يشتغل، وتقدر تعرض فيه مثلاً: "Welcome to Docs"