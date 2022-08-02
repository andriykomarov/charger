import axios from 'axios'
import {useState, useEffect} from 'react'

const QueryBox = () => {

  async function contactServer() {
    try {
      const response = await axios.get('http://localhost:8000/chargers/nearMe')
      setData(response.data);
      console.log(response.data) 
    } catch (error) {
      console.log(error)
    }
  }

  const [data,setData] = useState([])
  const [text,setText] = useState("")
  const [meme,setMeme] = useState("")

  useEffect(() => {
    console.log("HELLO!")
    contactServer();
  },[])


  return (
    <div className='QueryBox'>
        <input type="search" onChange={(e) => setText(e.target.value)}></input>
        <button onClick={() => setMeme(text)}>Search</button>
        <h1>{meme}</h1>
    </div>
  )
}

export default QueryBox