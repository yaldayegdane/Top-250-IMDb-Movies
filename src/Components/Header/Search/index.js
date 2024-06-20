import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        data: [],
        metaData: {}
    })
    function handleSearch(e) {
        if(e.target.value.length >= 3 ){
            axios
        .get(`https://moviesapi.ir/api/v1/movies?q=${e.target.value}`)
        .then(function (res){
            setData(res.data);
        })
        .catch(function (err){

        })
        }
    }
    function renderResult() {
        return data.data.map(function({title, id}) {
            return (
                <li key= {id}>
                <Link to= {`/movie/${id}`}>{title}</Link>
                </li>
            )});
    }
    function onEnter(e) {
        if(e.key === "Enter") {
            navigate(`/search?q=${e.target.value}`);
     }
    }
    return (
    <form>
        <input onKeyDown={onEnter} onChange={handleSearch} placeholder="Search" />
        <div className="search-box">
            <ul>{renderResult()}</ul>
            </div>
            <button><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            )
}