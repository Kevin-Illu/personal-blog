import { Layout } from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"
import Link from "next/link";
import Head from "next/head";
import Date from "../../components/date"

import styles from "../../styles/posts/post[id].module.css"

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <header className={styles.postHeader}>
                <h1>{postData.title}</h1>
                <div className={styles.postInfoContainer}>
                    <span className={styles.postTitle}>{postData.id}</span>
                    <Date dateString={postData.date} />
                </div>
            </header>
        
            <main>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </main >
            <footer>
                <Link href="/">
                    <a className="link">{"\<"}- Back to home</a>
                </Link>
            </footer>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}
