import Date from '../components/date'
import Link from 'next/Link'

import styles from '../styles/posts/postItem.module.css'

export const PostItem = ({id, title, date}) => {
  return (
    <article className={styles.post} key={id}>
      <Link href={`/posts/${id}/`}>
        <a className={styles.postHeader}>
          <h1 className={styles.postTitle}>{title}</h1>
          <Date dateString={date} />
        </a>
      </Link>
    </article>
  )
}
