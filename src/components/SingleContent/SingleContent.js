import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModel/ContentModal";
import MovieRating from "../Rating/Rating";


const SingleContent = ({
                           id,
                           poster,
                           title,
                           date,
                           media_type,
                           vote_average,
                           overview
                       }) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <img
                className="poster"
                src={poster ? `${img_300}${poster}` : unavailable}
                alt={title}
            />
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
            </span>
            <span className={'rating'}><p>rated {vote_average}</p>
                <MovieRating item={vote_average}/>
            </span>
            <div className={'movie-over'}>
                <h3>Overview</h3>
                <p>{overview}</p>
            </div>
       </ContentModal>
    );
};

export default SingleContent;