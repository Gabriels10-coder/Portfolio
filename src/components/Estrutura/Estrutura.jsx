import React from 'react';
import NavMain from './nav/navMain/navMain';


const Estrutura = (props) => {
    return (
        <div>
            <NavMain />
            {props.children}
        </div>
    )
}

export default Estrutura;