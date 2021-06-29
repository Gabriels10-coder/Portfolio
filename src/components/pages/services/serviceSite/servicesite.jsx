import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import WebIcon from '@material-ui/icons/Web';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
    margin: {
        marginTop: '7%'
    },
   
    paper: {
        width: 'max-content',
        boxShadow: '0px 3px 3px -2px #1976d2, 0px 3px 4px 0px #1976d2, 0px 1px 8px 0px #1976d2',
        padding: '25px 20px',
        marginRight: '5%',
        marginLeft: '5%'

    },
    title: {
        marginBottom: '3%'
    },
    container: {
        display: 'flex',
        flexDirection: 'row'

    },
    icone: {
        fontSize: '250px'
    },
    text: {
        maxWidth: '320px',
        marginTop: '4%'
    },
    ty: {
        color: '#4682b4'
    },
    fontTitle: {
        fontWeight: 500,
    },


})
const ServiceSite = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.margin}>
         
                <div className={classes.title}>
                    <Typography
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                        component={motion.div}
                        className={classes.fontTitle}
                        align='center'
                        variant='h3'
                        color='secondary'>
                        Serviços
                    </Typography>

                </div>
                <Box className={classes.container} justifyContent='center'>
                    <motion.div
                        initial={{ x: -700, y: -700 }}
                        animate={{ x: 0, y: 0, transition: { duration: 2, delay: 0.7 } }}
                        className={classes.paper}>
                        <div>
                            <Typography
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 1.8, duration: 1 } }}
                                component={motion.div}
                                variant='h4'
                                align='center'
                                color='secondary'>
                                Web Sites
                            </Typography>
                        </div>
                        <div className={classes.text}>
                            <Typography
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                                component={motion.div}
                                className={classes.ty}
                                variant='body1' >
                                Desenvolvo diversos tipos de web sites com ou sem animações,
                                seu negócio chegará em outro nível.
                            </Typography>
                        </div>
                        <Box
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 2.2, duration: 1 } }}
                            component={motion.div} display='flex' justifyContent='center'>
                            <WebIcon
                                className={classes.icone}
                                color='secondary' />
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={{ x: 700, y: -700 }}
                        animate={{ x: 0, y: 0, transition: { duration: 2, delay: 0.7 } }}
                        className={classes.paper}>
                        <Typography
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1.8, duration: 1 } }}
                            component={motion.div}
                            variant='h4'
                            align='center'
                            color='secondary'>
                            Sistemas
                        </Typography>
                        <div className={classes.text}>
                            <Typography
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                                component={motion.div}
                                className={classes.ty}
                                variant='body1' >
                                Se seu negócio estiver  precisando de um sistema , para agilizar suas vendas,contas,entregas, prezo sempre por um software de qualidade,
                                atendendo os requisitos do cliente.
                            </Typography>
                        </div>
                        <Box display='flex' justifyContent='center'>
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 2.2, duration: 1 } }}
                                width='200px'
                                src="https://img.icons8.com/ios-filled/100/4a90e2/system-information.png" />
                        </Box>
                    </motion.div>
                </Box>
        </div>

    )
}

export default ServiceSite;