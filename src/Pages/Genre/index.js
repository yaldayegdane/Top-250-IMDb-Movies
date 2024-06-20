import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Primary from "../../Components/Layouts/PrimaryLayout";
import { Pagination } from "antd";
import "./style.css";
import { useSearchParams, createSearchParams } from "react-router-dom";


export default function Genre() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [searchParams, setSearchParams] =useSearchParams();
    const [moviesData, setmoviesData] = useState({
        data:[],
        metadata:{},
    });

    useEffect(function() {
        getApi(searchParams.get("page") ? searchParams.get("page") : 1);
    }, [] )
    function getApi(page = 1) {
        axios.get(`https://moviesapi.ir/api/v1/genres/${id}/movies?page=${page}`)
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
            {moviesData.data.length === 0 ? (
                <h1>empty data</h1>
            ) : (<div className="list">
            <ul>{renderFarm()}</ul>
        </div>)
        }
        </div>
        )
    }
    function onPageChange(page) {
        setSearchParams(createSearchParams({page : page}))
        getApi(page);
    }
    return <Primary>
        <div className="container">
        {render()}
    <div className="pagination">
    <Pagination 
    onChange={onPageChange}
    Current={moviesData.metadata.current_page} 
    total={moviesData.metadata.total_count} 
    PageSize={moviesData.metadata.per_page}/>
    </div>
        </div>
    </Primary>
}