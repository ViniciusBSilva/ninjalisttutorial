import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae doloremque nostrum odio, sapiente cum impedit quibusdam porro dignissimos provident minus tempore quo, delectus, non nihil rem soluta veniam blanditiis dolorum.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae doloremque nostrum odio, sapiente cum impedit quibusdam porro dignissimos provident minus tempore quo, delectus, non nihil rem soluta veniam blanditiis dolorum.</p>
        <Link href="/ninjas" className={styles.btn}>See Ninjas Listing</Link>
      </div>
    </>
  )
}
