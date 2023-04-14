import { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [desc, setDesc] = useState("");
    const [query, setQuery] = useState("");
    const url = "http://localhost:4000/data";

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //String Conditioner 
        
        if(query.includes(" ")){
            //query to lowercase
            const words = query.toLowerCase().split(' ');

            //uppercase first letters
            const formatedQuery = words.map(word=>{
                const firstLetter = word.charAt(0).toUpperCase();
                const restOfWord = word.slice(1)
                return `${firstLetter}${restOfWord}`
            }).join('_')
            setQuery(formatedQuery)
            console.log(query)
        }


        fetch(`http://localhost:4000/search?q=${query}`)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setGenre(data.genre);
                setDesc(data.desc);
            });
            
    };

    const getData = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setTitle(json.title);
        setGenre(json.genre);
        setDesc(json.desc);
    };

    useEffect(() => {
        getData()
    }, []);
    
    return (
        <div className="search">
            <form className="search-bar" onSubmit={handleSubmit}>
            <h1 className="title">WorthTheWatch.com</h1>
                
                <input
                    className="search-box"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            {
                title!=undefined&&
            <div className="movie-deats">
            {title !== "" && <h2>Title : {title}</h2>}
            {genre !== "" && <h2>Genre : {genre}</h2>}
            {desc !== "" && <h2>Spoiler-free desc : {desc}</h2>}{" "}
            </div> 
            } 
        </div>
    );
};
export default SearchBar;
