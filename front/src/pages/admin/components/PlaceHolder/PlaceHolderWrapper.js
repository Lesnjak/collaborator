import React from 'react';
import Masonry from "react-masonry-css";
import PlaceHolder from "./PlaceHolder";

const PlaceHolderWrapper = (({count,breakpointCols}) => {
    const arrayLength = new Array(+count).fill('');
    return (
        <Masonry
            breakpointCols={breakpointCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {arrayLength.map((item,idx)=>(
                <PlaceHolder key={idx}/>
            ))}
        </Masonry>
    );
});

export default PlaceHolderWrapper;
