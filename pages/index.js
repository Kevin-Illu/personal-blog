import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '../components/Layout'
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
          <ul className='grid gap-2 grid-columns-2'>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id} className="post">
                <div className='post-header'>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <h4 className="post-title">{title}</h4>
                    </a>
                  </Link>
                  <span className="post-id">{id}</span>
                </div>
                <Date dateString={date}/>
              </li>
            ))}
          </ul>
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