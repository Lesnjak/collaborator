import React from 'react';
import Masonry from 'react-masonry-css'
import "placeholder-loading/dist/css/placeholder-loading.min.css";
import "./PlaceHolder.css"


const PlaceHolder = () => {
    return (
        <div className="placeholder">
            <div className="ph-item">
                <div>
                    <div className="ph-row">
                        <div className="ph-col-12"/>
                        <div className="ph-col-2"/>
                        <div className="ph-col-10 empty"/>
                        <div className="ph-col-8 big"/>
                        <div className="ph-col-4 big empty"/>
                    </div>
                </div>
                <div className="ph-col-2">
                    <div className="ph-avatar"/>
                </div>
                <div className="ph-col-12 ">
                    <div className="ph-row">
                        <div className="ph-col-8"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12 empty"/>
                    </div>
                </div>
                <div className="ph-col-12 ">
                        <div className="ph-picture "/>
                </div>

                <div className="ph-col-12 ">
                    <div className="ph-row">
                        <div className="ph-col-12 empty"/>
                        <div className="ph-col-8"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12"/>
                        <div className="ph-col-12 empty"/>
                    </div>
                </div>
                <div className="ph-col-12">
                    <div className="ph-row">
                        <div className="ph-col-12 bigger"/>
                        <div className="ph-col-12 empty"/>
                        <div className="ph-col-12 big"/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PlaceHolder;
