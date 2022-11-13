import Link from "next/link"
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                {/* <h1>Ninja List</h1> */}
                {/* <img src="/logo.png" alt="Ninja List Logo" /> */}
                
                {/* 
                    Next's "Image" component lazy load the image. 
                    This means that the image is only loaded when we need to see it. 
                    For example: if the image is down below on the page it will 
                    only be loaded when the user scrolls to that point
                */}
                <Image src="/logo.png" alt="Ninja List Logo" width={128} height={77}></Image>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
    );
}

export default Navbar;