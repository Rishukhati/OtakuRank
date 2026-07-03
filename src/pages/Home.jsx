import { useState, useEffect } from "react"
import AnimeCard from "../components/AnimeCard";


function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/top/anime?limit=12`)
            .then(response => response.json())
            .then(json => {
                if (json.data) {
                    setList(json.data)
                }
            })
    }, [])

    return (
        <>
            <ul>
                {list.map((anime, index) => (
                    <AnimeCard key={anime.mal_id} card={anime} />
                ))}
            </ul>
        </>
    );

}

export default Home