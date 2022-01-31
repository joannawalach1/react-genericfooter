import React from 'react';

const social = (props) => {
  return <div>
       <h3>Contact</h3>
       <p>tel:{props.phone}</p>
        <p>mail:{props.mail}</p>
  </div>;
};

export default social;
