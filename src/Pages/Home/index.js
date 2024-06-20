import { useEffect } from "react"
import Primary from "../../Components/Layouts/PrimaryLayout"
import titleMaker from "../../helpers/titleMaker";
import MovieList from "../../Components/MovieList";
import ByGenre from "../../Components/ByGenre";

export default function Home() {
    useEffect(function() {
    titleMaker ("Top 250 IMDb Movies");
    },[]);
    return(
        <div className="container">
            <Primary />
            <MovieList page="1" headerDetail={{ title:"Discover the Top 250 Movies", link: "/" }}/>
            <ByGenre genreId="1" headerDetail={{title:"Crime", link:"#"}} />
            <ByGenre genreId="2" headerDetail={{title:"Drama", link:"#"}} />
            <ByGenre genreId="3" headerDetail={{title:"Action", link:"#"}} />
            <ByGenre genreId="4" headerDetail={{title:"Biography", link:"#"}} />
            <ByGenre genreId="5" headerDetail={{title:"History", link:"#"}} />
            <ByGenre genreId="6" headerDetail={{title:"Advanture", link:"#"}} />
            <ByGenre genreId="7" headerDetail={{title:"Fantasy", link:"#"}} />
            <ByGenre genreId="8" headerDetail={{title:"Western", link:"#"}} />
            <ByGenre genreId="9" headerDetail={{title:"Comedy", link:"#"}} />
            <ByGenre genreId="10" headerDetail={{title:"Si_Fi", link:"#"}} />
            <ByGenre genreId="11" headerDetail={{title:"Mystery", link:"#"}} />
            <ByGenre genreId="12" headerDetail={{title:"Thriller", link:"#"}} />
            <ByGenre genreId="13" headerDetail={{title:"Family", link:"#"}} />
            <ByGenre genreId="14" headerDetail={{title:"War", link:"#"}} />
            <ByGenre genreId="15" headerDetail={{title:"Animations", link:"#"}} />
            <ByGenre genreId="16" headerDetail={{title:"Romance", link:"#"}} />
            <ByGenre genreId="17" headerDetail={{title:"Horror", link:"#"}} />
            <ByGenre genreId="18" headerDetail={{title:"Music", link:"#"}} />
            <ByGenre genreId="19" headerDetail={{title:"Film-Noir", link:"#"}} />
            <ByGenre genreId="20" headerDetail={{title:"Musical", link:"#"}} />
            <ByGenre genreId="21" headerDetail={{title:"Sport", link:"#"}} />
        </div>
    );
}