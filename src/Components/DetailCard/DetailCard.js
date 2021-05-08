import React from 'react';
import './DetailCard.css'

const DetailCard = (props) => {
//    const {email, gender, picture, name} = props.detail;
//    const pic = props.pic;
   const {city, country, postcode, state, street, streetNo, pic, title, first, last, gender, offset, description} = props.detail;
    return (
        <div className=''>
            <div className="detail-card">
                <div className=" pic-div"><img src={pic} alt="" /></div>
                <div className=" detail-div">
                    <h2>{title} {first} {last}</h2>
                    <p>{streetNo} {street} {city} {state} {country} {postcode}</p>
                    <p>{offset} {description}</p>
                    <p className='text-gray'>{gender}</p>

                </div>
            </div>
        </div>
    );
};

export default DetailCard;