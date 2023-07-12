import React from 'react';

export default function Book ({value}) {
    let percentage = (Math.floor(value.page / value.total * 100));
    console.log(percentage)
    return (
        <div className="Book">
            <div className="preview">
                <img className="image" src={value.image} width="100px" height="150px"/>
                <p className="page">{value.page}</p>
                <div className="percentBar" style={{width: percentage}}>
                    {percentage}%
                </div>
            </div>
            <div className="author">{value.name}</div>
        </div>
    );
}