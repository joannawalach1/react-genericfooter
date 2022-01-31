import React from 'react';

const company = (props) => {
    return <div>
        <h3>{props.name}</h3>
        <img src={props.logo} alt={props.name} />
        <p>{props.addressLine1}</p>
        <p>{props.addressLine2}</p>
       
        
        
   
    </div>;
};

export default company;
