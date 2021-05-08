import React from 'react';
import './PersonCard.css'

const PersonCard = (props) => {
    const { gender, nat, email, name } = props.person;
    const personDetail = props.personDetail;
    
    return (

      <div>
           <a href='#id' className="link" onClick={()=>personDetail(props.person)}>
        <div className="card-div">
         
         <p className='text-gray'>{gender} . {nat}</p>
         <h5 className='name-text'>{name.title} {name.first} {name.last}</h5>
         <p className='text-orange'>{email}</p>

       </div>
       </a>
      </div>
    );
};

export default PersonCard;