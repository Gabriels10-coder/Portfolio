import React from 'react';
import { motion } from 'framer-motion';
import {
    Typography,
    useMediaQuery,
    makeStyles,
    Button
} from '@material-ui/core';


const useStyles = makeStyles({
    marginName: {
        marginLeft: '5.5%',
        width: '400px',
        marginTop: '12%'

    },
    marginCargo: {
        marginTop: '1%',
        marginLeft: '5.5%',
        width: '300px'
    },
    word: {
        fontSize: '600%'
    },
    button: {
        textTransform: 'capitalize',
        padding: '1%',
        fontSize: '110%'

    },
    divButton: {
        marginLeft: '5.5%',
        marginTop: '2%'
    },
    divmainmobi: {
        marginTop: '50%',
        marginLeft: '-30%',
    },
    buttonMobile: {
        textTransform: 'capitalize',
        fontWeight: 900,

        padding: '10px'
    },
    divButtonMobile: {
        marginTop: '5%',
        marginLeft: '-30%'
    },
    titleMobile: {
        width: '200px',
    },
    marginCargomobile: {
        marginTop: '4%'
    },
    a: {
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 900,
    }


})

const Occupation = () => {
    const classes = useStyles();
    const text = useMediaQuery('(max-width:700px)')
    return (
        <div>
            {!text ? (
                <div >
                    <div className={classes.marginName}>
                        <Typography
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 1.2 } }}
                            component={motion.div}
                            className={classes.word}
                            align='left'
                            variant='h2'
                            color='secondary'>
                            Gabriel S Maciel
                        </Typography>
                    </div>
                    <div className={classes.marginCargo}>
                        <Typography
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 1.4 } }}
                            component={motion.div}
                            align='left'
                            variant='h5'
                            color='secondary'>
                            Full Stack Developer
                        </Typography>
                    </div>
                    <div className={classes.divButton}>
                        <Button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 1.6 } }}
                            component={motion.div}
                            whileHover={{ background: 'white'}} 
                            variant='contained'
                            color='secondary'
                            className={classes.button}>
                           <motion.a className={classes.a} whileHover={{color:'#1976d2'}} href='projects'> Meu Trabalho</motion.a>
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={classes.divmainmobi}>
                        <div className={classes.titleMobile}>
                            <Typography
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 1.2 } }}
                                component={motion.div}
                                variant='h3'
                                color='secondary'>
                                Gabriel S Maciel
                            </Typography>
                        </div>
                        <div className={classes.marginCargomobile}
                        >
                            <Typography
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 1.4 } }}
                                component={motion.div}
                                variant='h6'
                                color='secondary'>
                                Full Stack Developer
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.divButtonMobile}>
                        <Button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 1.6 } }}
                            whileTap={{ background: 'white' }}
                            component={motion.div}
                            variant='contained'
                            color='secondary'
                            className={classes.buttonMobile}>
                            <motion.a whileTap={{ color: '#1976d2' }} className={classes.a} href='/projects'> Meu trabalho</motion.a>

                        </Button>
                    </div>

                </div>
            )}
        </div>
    )
}
export default Occupation;