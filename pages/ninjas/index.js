import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

/* 
    This code runs on build-time, as the app is built and the components are rendered, 
    not in the browser 
*/
export const getStaticProps = async () => {

    // usign "await" to call the functions because they are async; they return promises
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // Returning the props with the content "ninjas" containing the data from "data" variable
    return {
        props: { ninjas: data }
    }

}

/* 
    "getStaticProps" will run before the component is rendered. 
    It will then fetch the data and wait the response. When the "Ninjas" component 
    is rendered the data will be pushed inside it so that the component is rendered
    with the data inside it.
*/


// Passing to the function the "ninjas" content of the props returned from getStaticProps
const Ninjas = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={'/ninjas/' + ninja.id} className={styles.single} key={ninja.id}>
                        <h3>{ninja.name}</h3>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Ninjas;