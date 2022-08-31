import { format, parseISO } from "date-fns";

import styles from '../styles/posts/postItem.module.css'

export default function Date({ dateString }){
    const date = parseISO(dateString);
    return <time dateTime={dateString} className={styles.postDate}>{format(date, 'LLLL d, yyyy')}</time>
}
