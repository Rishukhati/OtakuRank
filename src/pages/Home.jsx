import { useState, useEffect } from "react"
import AnimeCard from "../components/AnimeCard";


function Home() {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

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
            <input type="search u fav " />
        </>
    );

}

export default Home