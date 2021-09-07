import "./MovieCarousel.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Content from "../Content/Content";


const handleDragStart = (e) => e.preventDefault();

const MovieCarousel =

    ({ id, media_type }) => {
        const [credits, setCredits] = useState([]);



        const fetchCredits = async () => {
            const {data} = await axios.get(
                `https://api.themoviedb.org/3/trending/all/day?api_key=bcb4edb29b0de1fbbb2ebc6d8cbeaee5`
            );
            setCredits(data.results);
        };

        const items = credits.map((c) => (
            <div className="carouselItem"  onDragStart={handleDragStart}>
                <Content
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type="movie"
                    vote_average={c.vote_average}
                    overview={c.overview}
                />
            </div>
        ));

        const responsive = {
            0: {
                items: 2,
            },
            512: {
                items: 3,
            },
            1024: {
                items: 4,
            },
        };

        useEffect(() => {
            fetchCredits();
            // eslint-disable-next-line
        }, []);


        return (
            <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
        );
    };

export default MovieCarousel;