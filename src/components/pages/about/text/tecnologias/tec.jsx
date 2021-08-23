import React from 'react';
import { motion } from 'framer-motion';

import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    marginLogo: {
        marginRight: '1%'
    },
    marginTitle: {
        marginTop: '1%'
    },
    marginstack: {
        marginBottom: '2%',
    }
})

const Tecnologia = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Typography
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 1 } }}
                    component={motion.div}
                    variant='h6'
                    color='secondary'>
                    Tecnologias
                </Typography>
            </div>
            <div className={classes.marginTitle}>
                    <Typography
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 1 } }}
                        component={motion.div}
                        variant='body1'
                        color='secondary'>
                        Front End
                    </Typography>
                <div className={classes.marginstack}>
                    <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 360 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                        className={classes.marginLogo}
                        width='5%'
                        src="https://img.icons8.com/ios/50/4a90e2/html-5--v1.png"
                        title='HTML'
                        alt='HTML' />
                    <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 360 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                        className={classes.marginLogo}
                        width='5%'
                        src="https://img.icons8.com/ios/50/4a90e2/css3.png"
                        title='CSS'
                        alt='CSS' />
                    <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 360 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                        className={classes.marginLogo}
                        width='5%'
                        src="https://img.icons8.com/ios/50/4a90e2/javascript-logo.png"
                        title='JavaScript'
                        alt='JavaScript' />
                    <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 360 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                        className={classes.marginLogo}
                        width='5%'
                        src="https://img.icons8.com/ios/50/4a90e2/react-native--v1.png"
                        title='ReactJs'
                        alt='Reactjs' />


                    <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 360 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                        className={classes.marginLogo}
                        alt='Material-ui'
                        title='Material-ui'
                        width='5.5%'
                        src='https://seeklogo.com/images/M/material-ui-logo-88EC9AE3DB-seeklogo.com.png' />
                    <motion.img
                        initial={{ opacity: 0, scale: 0, rotate: 360 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                        className={classes.marginLogo}
                        alt='Bootstrap'
                        title='Bootstrap'
                        width='5.5%'
                        src="https://img.icons8.com/windows/32/4a90e2/bootstrap.png" />

                </div>
            </div>
            <div>
                <Typography
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 1 } }}
                    component={motion.div}
                    variant='body1'
                    color='secondary'>
                    Back End
                </Typography>
                <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                    className={classes.marginLogo}
                    alt='NodeJS'
                    title='NodeJS'
                    width='6%'
                    src="https://img.icons8.com/color/50/000000/nodejs.png" />
                <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                    className={classes.marginLogo}
                    alt='SQL'
                    title='SQL'
                    width='6%'
                    src="https://img.icons8.com/dotty/80/4a90e2/sql.png" />
                <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                    className={classes.marginLogo}
                    alt='ORACLE'
                    title='ORACLE'
                    width='6%'
                    src="https://img.icons8.com/ios-filled/50/4a90e2/oracle-logo.png" />
                    <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1.2, delay: 1 } }}
                    className={classes.marginLogo}
                    alt='SQL SERVER'
                    title='SQL SERVER'
                    width='6%'
                    src="./img/sqlserver.png"/> 
            </div>
        </div>
    )
}

export default Tecnologia;