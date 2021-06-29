import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import ContactSite from './contato';
import Estrutura from '../../Estrutura/Estrutura';
import ContactMobile from './contactmobile';

const ContactMain = () => {
    const mobile = useMediaQuery('(max-width:700px)')
    return (
        <div>
            <Estrutura>
                {!mobile ? (
                    <div>
                        <ContactSite />
                    </div>

                ) : (
                    <div>
                        <ContactMobile />
                    </div>


                )}
            </Estrutura>
        </div>

    )
}

export default ContactMain;
