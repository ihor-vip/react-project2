import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";

const Series = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);

    const fetchSeries = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=bcb4edb29b0de1fbbb2ebc6d8cbeaee5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSeries();
        // eslint-disable-next-line
    }, [genreforURL, page]);

    return (
        <div>
            <span className="pageTitle">Choose your TV Series</span>
            <Genres
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="movie_table">
                {content &&
                content.map((c) => (
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.first_air_date || c.release_date}
                        media_type="tv"
                        vote_average={c.vote_average}
                        overview={c.overview}
                    />
                ))}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    );
};

export default Series;