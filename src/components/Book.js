import React from 'react';

export default function Book ({value}) {
    return (
        <div className="Book">
            <img src={value.image}/>
            <p>{value.page}</p>
            <p>{value.name}</p>
        </div>
    );
}