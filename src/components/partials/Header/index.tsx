import React from 'react'; 
import * as C from './styles';
import { Link } from 'react-router-dom';

export const Header = ({ headerColor }: {headerColor: boolean}) => { 

    return (
        <C.Header headerColor={headerColor}>
            <Link to="" onClick={() => window.scrollTo(0, 0)}>
                <img  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo Netflix" />
            </Link>
            <div className="logo-user"></div>
        </C.Header>
    );
}