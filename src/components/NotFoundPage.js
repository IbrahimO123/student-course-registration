import React from 'react';
import {BiSad} from 'react-icons/bi';

const NotFoundPage = () => (
    
            <h1 className="mt-5 pt-4 mx-auto text-center">404: Page not Found <BiSad/> </h1>
        
);
const removeClear = () => {
    let clear = document.querySelector ("#footer")
    clear.parentNode.removeChild(clear)
}

removeClear();

export default NotFoundPage;
