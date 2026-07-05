import { Link } from "react-router-dom"





function AnimeCard(props) {
    return (
        <Link to={`/anime/${props.card.mal_id}`} >
            <div>
                <p>title: {props.card.title}</p>
            </div>
        </Link >
    );

}
export default AnimeCard