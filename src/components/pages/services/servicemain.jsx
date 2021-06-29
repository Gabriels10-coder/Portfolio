import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import ServiceSite from '../services/serviceSite/servicesite';
import Estrutura from '../../Estrutura/Estrutura';
import ServiceMobile from './servicemobile/servicemobile';





const Service = () => {
    const mobile = useMediaQuery('(max-width:600px)')
    return (
        <div>
            <Estrutura>
                {!mobile ? (
                    <div>
                        <ServiceSite />
                    </div>
                ) : (
                    <div>
                        <ServiceMobile />
                    </div>
                )
                }

            </Estrutura>
        </div>
    )
}

export default Service;