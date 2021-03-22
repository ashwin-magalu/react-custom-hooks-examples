import axios from 'axios';
import {useState, useEffect} from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

const useGif = (tag) => {
    const [gif, setGif] = useState("")
    let imgSrc = ""
    let newTag = tag ? tag : "random"

    useEffect(() => {
        fetchData(newTag)
       
        return () => {
            //
        }
    }, [newTag])

    const fetchData = async (tag) => {
        const options = {
            method: 'GET',
            url: 'https://giphy.p.rapidapi.com/v1/stickers/search',
            params: {api_key: 'dc6zaOxFJmzC', q: tag},
            headers: {
              'x-rapidapi-key': '3669d3b834msh50081720fb669p128af5jsncebe661c1e85',
              'x-rapidapi-host': 'giphy.p.rapidapi.com'
            }
          };
          
        await axios.request(options).then((response)=> {
              setGif(response.data?.data[0]?.images?.downsized_large?.url);
        }).catch(function (error) {
              console.error(error);
        })
    }

    return {gif, fetchData}
}

export default useGif