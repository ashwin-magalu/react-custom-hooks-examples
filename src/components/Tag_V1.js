import React, {useState} from 'react'
import useGif from '../customHooks/useGif'

const Tag_V1 = () => {
    const [tag, setTag] = useState("dogs")

    const {gif, fetchData} = useGif(tag)

    const handleClick = () => fetchData(tag)

    return (
        <div className="container">
            <h1>Random {tag} GIF</h1>
            <img width="500" src={gif} alt={"Random gif"} />
            <input type="text" value={tag} onChange={e => setTag(e.target.value)} />
            <button onClick={handleClick}>Click for new Gif</button>
        </div>
    )
}

export default Tag_V1
