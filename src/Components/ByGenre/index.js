import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

export default function ByGenre({genreId = "1", headerDetail}) {
    const {title, link} = headerDetail;
    const [loading, setLoading] = useState(true);
    const [moviesData, setmoviesData] = useState({
        data:[],
        metadata:{},
    });

    useEffect(function() {
        getApi()
    }, [] )
    function getApi(){
        axios.get(`https://moviesapi.ir/api/v1/genres/${genreId}/movies`)
        .then(function(res) {
            setmoviesData(res.data);
            setLoading (false);
        })
        .catch(function(err) {
            setLoading (false);
        });
    }
    function renderFarm() {
        return moviesData.data.map(function({id, poster, title}){
            return (
                <li key={id}>
                <Link to = {`/movie/${id}`}>
                <img src={poster} alt=""/>
                <h5>{title}</h5>
                </Link>
            </li>
            )
        });
    }

    function render (){
        if (loading === true) {
            return <h1>loading....</h1>;
        }
        return (
            <div className="movie-list">
             <div className="list-header">
                <h2> {title} </h2>
                <a href={link}> Veiw All</a>
            </div>
            {moviesData.data.length === 0 ? (
                <h1>empty data</h1>
            ) : (<div className="list">
            <ul>{renderFarm()}</ul>
        </div>)
        }
        </div>
        )
    }
    return <Fragment>{render()}</Fragment>
}