import React from 'react';

export default function Ratings(props) {
    const { foodData } = props;
    return (
        <>
            <span class="rating">
                <span class="rating-item flex-center" style={{ borderColor: "yellow" }}>{foodData.Hiz}</span>
                <span>Hiz</span>
            </span>

            <span class="rating">
                <span class="rating-item flex-center" style={{ borderColor: "green" }}>{foodData.Lezzet}</span>
                <span>Lezzet</span>
            </span>

            <span class="rating">
                <span class="rating-item flex-center" style={{ borderColor: "green" }}>{foodData.Sunum}</span>
                <span>Sunnum</span>
            </span>
        </>
    );
}
