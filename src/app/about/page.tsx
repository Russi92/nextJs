
import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata={
    title:  {
        absolute : "About" // هنا عنوان الصفحة بيكون مستقل بنفسه علي حسب اللي مكتوب داخل ال absolute
    }
}


export default function About(){
    return (<>
        <Link href="/">Home</Link>
            <h1>About Me</h1>
            </>
    )
}

// هنا بيشرح اضافة ال metadata عشان يظهر في محرجات البحث و اسم الصفحة