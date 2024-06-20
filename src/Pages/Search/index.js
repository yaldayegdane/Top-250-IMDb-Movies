import { useEffect, useState } from "react";
import Primary from "../../Components/Layouts/PrimaryLayout"
import { useSearchParams, Link, createSearchParams } from "react-router-dom"
import axios from "axios";
import "./style.css";

export default function Search() {
    const [queryStrings, setQueryStrings] = useSearchParams();
    const [data, setData] = useState({
        data: [],
        metaData: {}
    })
    useEffect(function() {
        if(queryStrings.get("q") && queryStrings.get("q") ===! "") getApi()
    }, [])
    function getApi(value) {
        axios
        .get(`https://moviesapi.ir/api/v1/movies?q=${value ? value : queryStrings.get("q")}`)
        .then(function (res){
            setData(res.data);
        })
        .catch(function (err){

        })
    }
    function renderResult() {
        return data.data.map(function({title, id, poster}) {
            return (
                <li key= {id}  className="movie-card">
                <Link to= {`/movie/${id}`}>
                <img src={poster} alt={title} className="movie-poster" />
                        <h5 className="movie-title">{title}</h5>
                        </Link>
                </li>
            )});
    }
    function onType(e) {
        setQueryStrings(createSearchParams({q: e.target.value}));
        getApi();
    }
    return (
        <Primary>
            <div className="container">
            <h1>search</h1>
            <input 
            style={{padding: "10px", marginTop: "10px", width:"100%" }} 
            placeholder="movie,actor,genre..."
            onChange={onType} 
            />
            <div className="searchBox">
                        <ul>{renderResult()}</ul>
                    </div>
            </div>
        </Primary>
    )
}