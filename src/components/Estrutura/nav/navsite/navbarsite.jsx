import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Grid,
    makeStyles
} from '@material-ui/core';

import { motion } from 'framer-motion';

const useStyles = makeStyles({
    margin: {
        marginRight: '1%'
    },
    container: {
        marginLeft: '4.5%',
    },
    textButton: {
        textTransform: 'capitalize',
        fontSize: '20px',
        color: '#1976d2'
    },
    marginContact: {
        marginRight: '4%',
    },
    a: {
        textDecoration: 'none',
        color: '#1976d2'
    }
})
const NavSite = (props) => {
    

    const classes = useStyles();
    return (
        <div>
            <AppBar
                variant='outlined'
                color='primary'>
                <Toolbar variant='regular' >
                    <Grid
                        className={classes.container}
                        container
                        justify='flex-start'>
                        <motion.div>
                            <Button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                                component={motion.div}
                                whileHover={{ scale: 1.2 }}
                                href='/'
                                className={classes.textButton}
                                variant='text'
                                color='primary'>
                                <motion.a

                                    className={classes.a}
                                    href='/'>Inicio</motion.a>

                            </Button>
                        </motion.div>
                        <motion.div
                            className={classes.margin}
                        >
                            <Button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1, delay: 0.7 } }}
                                component={motion.div}
                                whileHover={{ scale: 1.2 }}
                                
                                className={classes.textButton}
                                variant='text'
                                color='primary'>
                                    <motion.a 
                                    className={classes.a}
                                    href='/about'> sobre Mim
                                    </motion.a>
                               
                            </Button>
                        </motion.div>
                        <motion.div>

                            <Button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }}
                                component={motion.div}
                                whileHover={{ scale: 1.2 }}
                                className={classes.textButton}
                                variant='text'
                                color='primary'>
                                <motion.a
                                    className={classes.a}
                                    href='/projects'>
                                    Projetos
                                </motion.a>

                            </Button>
                        </motion.div>
                        <motion.div>

                            <Button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1, delay: 1.1 } }}
                                component={motion.div}
                                whileHover={{ scale: 1.2 }}
                                className={classes.textButton}
                                variant='text'
                                color='primary'>
                                <motion.a
                                    className={classes.a}
                                    href='/services'>
                                    Serviços
                                </motion.a>

                            </Button>
                        </motion.div>
                    </Grid>
                    <motion.div className={classes.marginContact}>
                        <Button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1, delay: 1.3 } }}
                            component={motion.div}
                            whileHover={{ scale: 1.2 }}
                            className={classes.textButton}
                            variant='text'
                            color='primary' >
                        <motion.a className={classes.a} href='/contact'>contato</motion.a>

                        </Button>
                    </motion.div>

                </Toolbar>
            </AppBar>
        </div>


    )
}
export default NavSite;