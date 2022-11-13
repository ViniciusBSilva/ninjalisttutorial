import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)   // Redirect the user back as using "Back" on the browser
            router.push('/')    // Redirect to the homepage
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oooooops... 404!</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/">Homepage</Link>.</p>
        </div>
    );
}

export default NotFound;