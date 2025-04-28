import React from "react";

function TripleDownwardsArrow({ fillColor, height, width }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "128"}
            height={height || "128"}
            fill={fillColor || "none"}
            viewBox="0 0 128 128"
            id="triple-down-chevron"
        >
            <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M46 79L64 97 82 79M46 55L64 73 82 55M46 31L64 49 82 31"
            ></path>
        </svg>
    );
}

export default TripleDownwardsArrow;
