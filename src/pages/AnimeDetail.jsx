import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


function AnimeDetail() {
    const [detail, setDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(response => response.json())
            .then(json => setDetail(json.data))
    }, [])
    return (
        <>
            <h1>  {detail?.title} </h1>
            <p> {detail?.score} </p>
            <p> {detail?.episodes} </p>
            <p> {detail?.status} </p>
            <p> {detail?.synopsis} </p>
            <img src={detail?.images.jpg.large_image_url} alt="" />
        </>
    )
}

export default AnimeDetail