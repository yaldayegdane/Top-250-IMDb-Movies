import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import titleMaker from "../../helpers/titleMaker";
import axios from "axios";
import Primary from "../../Components/Layouts/PrimaryLayout";
import "./style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard, faFilm, faMap, faMasksTheater, faPenNib } from "@fortawesome/free-solid-svg-icons";

export default function SingleMovie() {
    const {id} = useParams();
    const [data, setData] = useState({title: ""});
    const [loading, setLoading] =useState(true);

    useEffect(function() {
        getApi();
    }, [ id ]);
    useEffect (function() {
        titleMaker (data.title)
    }, [])
    function getApi() {
        axios
        .get(`https://moviesapi.ir/api/v1/movies/${id}`)
        .then(function(res) {
            titleMaker(res.data.title);
            setData(res.data);
            setLoading(false);
        })
        .catch(function(err) {
            setLoading(false);
        });
    }
    return (
        <Primary>
            <div className="container">
            {loading === false ?(
                    <div className="holder">
                        <div className="cover">
                        <img src= {data.poster} alt=""/>
                        </div>
                        <div className="details">
                        <h1>{data.title}-{data.year}</h1>
                        <p><FontAwesomeIcon icon={faFilm}/> <b>Genres:</b> {data.genres}</p>
                        <p><FontAwesomeIcon icon={faClapperboard}/> <b>Director:</b> {data.director}</p>
                        <p><FontAwesomeIcon icon={faPenNib}/> <b>Writer:</b> {data.writer}</p>
                        <p><FontAwesomeIcon icon={faMasksTheater}/> <b>Actors:</b> {data.actors}</p>
                        <p><FontAwesomeIcon icon={faMap}/> <b>Plot:</b> {data.plot}</p>
                        </div>
                    </div>
            ) : (
            <h1>Loading...</h1>
            )}
            </div>
        </Primary>
    );
}