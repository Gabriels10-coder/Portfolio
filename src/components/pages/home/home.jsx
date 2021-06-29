import React from 'react';
import Estrutura from '../../Estrutura/Estrutura';
import Occupation from './entry/occupation/occupacion';
import {  makeStyles, useMediaQuery, Grid } from '@material-ui/core';

const useStyles = makeStyles({

    marginMobile: {
        marginTop: '40%',
    }
})
const Home = () => {
    const homePage = useMediaQuery('(max-width:600px)')
    const classes = useStyles()
    return (
        <div>
            <Estrutura>
                {!homePage ? (
                    <div>
                        <div>
                            <Occupation />
                        </div>
                        
                    </div>
                ) : (
                    <Grid alignItems='center' direction='column' className={classes.marginMobile} container justify='center'>
                        <Occupation />
                    </Grid>

                )}
            </Estrutura>
        </div>
    );
}

export default Home;