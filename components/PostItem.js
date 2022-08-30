import Date from '../components/date'
import Link from 'next/Link'

export const PostItem = ({id, title, date}) => (
  <article key={id}>
    <div className='post-header'>
      <Link href={`/posts/${id}`}>
        <a>
          <h4 className="post-title">{title}</h4>
        </a>
      </Link>
      <span className="post-id">{id}</span>
    </div>
    // <Date dateString={date}/>
  </article>
)
