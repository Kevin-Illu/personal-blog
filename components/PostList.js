// import {Post} from './PostItem';
import { PostItem } from './postItem'
import styles from '../styles/List.module.css'

export const PostList = ({allPostsData}) => (
  <div className={styles.postsList}>
  {
    allPostsData.map(data => (
        <PostItem data={data}/>
    ))
  }
  </div>
)
