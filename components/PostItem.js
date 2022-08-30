import Date from '../components/date'
import Link from 'next/Link'

export const PostItem = ({id, title, date}) => {
  return (
    <article key={id}>
      <Link href={`/posts/${id}/`}>
        <a>
          <h1>{title}</h1>
          <Date dateString={date} />
        </a>
      </Link>
    </article>
  )
}
