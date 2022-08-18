import { format, parseISO } from "date-fns";

export default function Date({ dateString }){
    const date = parseISO(dateString);
    return <time dateTime={dateString} className="post-date">{format(date, 'LLLL d, yyyy')}</time>
}