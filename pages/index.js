import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '../components/Layout'
import { PostList } from '../components/PostList'

import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="ico" href="/favicon.ico" />
      </Head>
      <header className='header'>
        <h1 className="font-bold text-3xl">
          Welcome to my <span className="text-blue">Blog</span>
        </h1>
      <Image src="/vercel.svg" alt='vercel logo' width="80" height="28" />
      </header>
      <main>
        <section className="posts-list">
          <PostList allPostsData={allPostsData} />
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
