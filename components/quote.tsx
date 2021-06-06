import { FunctionComponent } from 'react'

type Props = {
    text: string
    author: string
}

const Quote: FunctionComponent<Props> = ({ text, author }) => {
    return (
        <div className="quote border-l-4 mb-16 p-4 opacity-80">
            <p className="text-lg italic">{text}</p>
            <p className="text-xl font-bold">{author}</p>
        </div>
    )
}

export default Quote