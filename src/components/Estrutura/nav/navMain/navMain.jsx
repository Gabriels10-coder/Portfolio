import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import NavMobile from '../navmobile/navbarmobile';
import NavSite from '../navsite/navbarsite';

const NavMain = () => {
    const navs = useMediaQuery('(max-width:600px)')
    return (
        <div>
            {!navs ? (
                <div>
                    <NavSite />
                </div>
            ) : (
                <div>
                    <NavMobile />
                </div>
            )}
        </div>

    )
}
export default NavMain;