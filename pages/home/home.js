import Head from 'next/head';
import Link from "next/link"
import Script from 'next/script';
import LayoutHome from '../../components/layoutHome/layoutHome';
import styles from "./home.module.css"
import NavBar from '../../components/navBar/navBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <LayoutHome>
        <h1 className={styles.topHome}>
          Read <Link href="/posts/first-post">this page </Link>
        </h1>
      </LayoutHome>
    </>
  )
}
