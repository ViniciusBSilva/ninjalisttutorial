import Link from "next/link";

const Custom500 = () => {
    return (
        <div className="not-found">
            <h1>500 - Server-side error occurred</h1>
            <p>Go back to the <Link href="/">Homepage</Link>.</p>
        </div>
    );
}

export default Custom500;