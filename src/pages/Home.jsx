import { useState, useEffect } from "react"
import AnimeCard from "../components/AnimeCard";


function Home() {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search) {
            fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
                .then(response => response.json())
                .then(json => {
                    if (json.data) {
                        setList(json.data)
                    }
                })
        } else {
            fetch(`https://api.jikan.moe/v4/top/anime?limit=12`)
                .then(response => response.json())
                .then(json => {
                    if (json.data) {
                        setList(json.data)
                    }
                })
        }
    }, [search])

    return (
        <>
            <ul>
                {list.map((anime, index) => (
                    <AnimeCard key={anime.mal_id} card={anime} />
                ))}
            </ul>
            <input type=" text "
                placeholder=" search ur fav "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </>
    );

}

export default Home