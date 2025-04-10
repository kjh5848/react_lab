import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'


function Detail() {
  const {id} = useParams()
  const getMoviesV1 = async () => {
    const reponse = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await reponse.json()
    console.log(json)
  };
  useEffect(() => {
    getMoviesV1()
    
  }, [])
  
  return (
    <div>Detail</div>
  )
}

export default Detail