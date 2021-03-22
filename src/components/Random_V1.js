import React from 'react'
import useGif from '../customHooks/useGif'

const Random_V1 = () => {
    
    const {gif, fetchData} = useGif()
    

    return (
        <div className="container">
            <h1>Random GIF</h1>
            <img width="500" src={gif} alt={"Random gif"} />
            <button onClick={fetchData}>Click for new Gif</button>
        </div>
    )
}

export default Random_V1
