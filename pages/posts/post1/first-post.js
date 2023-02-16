import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import styles from "./first-post.module.css"
import LayoutPost from '../../../components/layoutPost/layoutPost'

export default function FirstPost(){
    return(
        <LayoutPost>
            <Head>
                <title>My first post in next js</title>
            </Head>

            


            <h1>First post</h1>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="profile image"
                ></Image>
        </LayoutPost>
    )
}