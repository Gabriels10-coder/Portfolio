import Text from './text/textsite';
import Estrutura from '../../Estrutura/Estrutura';
import TextMobile from './text/textmobile';
import React from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({

    margin: {
        marginTop: '30%',
    },
    pic: {
        width: '30%',
        height: '20%'
    }
})



const About = () => {
    const mobile = useMediaQuery('(max-width:700px)')
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Estrutura>
             {!mobile ? (
                 <Text/>
             ):(
                 <TextMobile/>
             )}
            </Estrutura>
        </div>
    )
}

export default About;