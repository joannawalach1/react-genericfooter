import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const socials = (props) => {
    return <div>
        <div><h3>Socials</h3></div>
        <div className='subsocials'>
            <p><a href="https://www.facebook.com/"><BsFacebook />{props.fb}</a></p>
            <p><a href="https://www.instagram.com/"><BsInstagram />{props.instagram}</a></p>
            <p><a href="https://twitter.com/"><BsTwitter />{props.twitter}</a></p>
        </div></div>;
};

export default socials;
