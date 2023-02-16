import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import styles from "./second-post.module.css"
import LayoutPost from '../../../components/layoutPost/layoutPost'


export default function SecondPost(){
    return(
        <LayoutPost>
            <Head>
                <title>My second post in next js</title>
            </Head>

            <h1>Second post</h1>
            
        </LayoutPost>
    )
}