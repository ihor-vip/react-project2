import './Search.css'
import SingleContent from "../../components/SingleContent/SingleContent";
import React, { useState } from "react";



const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [content, setContent] = useState([]);


    const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=bcb4edb29b0de1fbbb2ebc6d8cbeaee5&query=";
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            fetch(SEARCH_API + searchTerm)
                .then((res) => res.json())
                .then((data) => {
                    setContent(data.results);
                });
            setSearchTerm('')
        }
    };


    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div>
            <span className="pageTitle">Search for Content</span>
            <form onSubmit={handleOnSubmit}>
                <input
                    className={'search'}
                    type={'search'}
                    placeholder={'Search...'}
                    value={searchTerm}
                    onChange={handleOnChange}
                />
            </form>


            <div className={'wrap'}>
                {content &&
                content.map((c) => (
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="movie"
                        vote_average={c.vote_average}
                        overview={c.overview}
                    />
                ))}
            </div>
        </div>

    );

}

export default Search;