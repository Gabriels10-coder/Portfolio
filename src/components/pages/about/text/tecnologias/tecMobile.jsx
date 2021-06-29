import React from 'react';
import { motion } from 'framer-motion';

import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    marginLogo: {
        marginRight: '1%'
    },
    marginTitle: {
        marginTop: '1%'
    }
})

const TecnologiaMobile = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Typography
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 1.4 } }}
                    component={motion.div}
                    variant='h6'
                    color='secondary'>
                    Tecnologias
                </Typography>
            </div>
            <div className={classes.marginTitle}>
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 1.6 } }}
                    className={classes.marginLogo}
                    width='15%'
                    src="https://img.icons8.com/ios/50/4a90e2/html-5--v1.png"
                    title='HTML'
                    alt='HTML' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 1.8 } }}
                    className={classes.marginLogo}
                    width='15%'
                    src="https://img.icons8.com/ios/50/4a90e2/css3.png"
                    title='CSS'
                    alt='CSS' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 1.8 } }}
                    className={classes.marginLogo}
                    width='15%'
                    src="https://img.icons8.com/ios/50/4a90e2/javascript-logo.png"
                    title='JavaScript'
                    alt='JavaScript' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 2.0 } }}
                    className={classes.marginLogo}
                    width='15%'
                    src="https://img.icons8.com/ios/50/4a90e2/react-native--v1.png"
                    title='ReactJs'
                    alt='Reactjs' />


                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 2.2 } }}
                    className={classes.marginLogo}
                    alt='Material-ui'
                    title='Material-ui'
                    width='15%'
                    src='https://seeklogo.com/images/M/material-ui-logo-88EC9AE3DB-seeklogo.com.png' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 2.4 } }}
                    className={classes.marginLogo}
                    alt='Bootstrap'
                    title='Bootstrap'
                    width='15%'
                    src="https://img.icons8.com/windows/32/4a90e2/bootstrap.png" />

                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2, delay: 2.6 } }}
                    className={classes.marginLogo}
                    alt='NodeJS'
                    title='NodeJS'
                    width='15%'
                    src="https://img.icons8.com/color/50/000000/nodejs.png" />
            </div>
        </div>
    )
}

export default TecnologiaMobile;