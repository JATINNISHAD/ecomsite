import React from 'react';
import Notfound from './NotFoundPic.gif';

const NotFound = props =>(
    <div>
        <p>This page not found</p>
        <img alt="not found" src={Notfound}/>
    </div>
);
export default NotFound;