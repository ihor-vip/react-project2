import React, { useState } from 'react'
import {Rating} from "react-simple-star-rating";

export default function MovieRating(item) {

    const [rating, setRating] = useState((item.item / 2))

    const starRating = (rate) => {
        setRating(rate)
    }
    return (
        <div className={'box_stars'}>
            <Rating onClick={starRating} ratingValue={rating} />
        </div>
    )
}



