import { PostItem } from './postItem'
import styles from '../styles/List.module.css'

export const PostList = ({allPostsData}) => (
  <div className={styles.postsList}>
  {
    allPostsData.map(({id, title, date}) => (
      <PostItem id={id} title={title} date={date} />
    )) 
  }
  </div>
)
