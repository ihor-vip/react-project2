import "./Content.css";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModel/ContentModal";
import MovieRating from "../Rating/Rating";


const SingleContent = ({
                           id,
                           poster,
                           title,
                           media_type,
                           vote_average,
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
                <span>
                   <MovieRating item={vote_average}/>
                </span>
            </span>
        </ContentModal>
    );
};

export default SingleContent;