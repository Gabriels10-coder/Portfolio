import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles, Typography, Box } from '@material-ui/core';
import WebIcon from '@material-ui/icons/Web';
const useStyles = makeStyles({
    margin: {
        marginTop: '18%'
    },
    paper: {
        width: 'max-content',
        boxShadow: '0px 3px 3px -2px #1976d2, 0px 3px 4px 0px #1976d2, 0px 1px 8px 0px #1976d2',
        padding: '25px 20px',
        marginBottom: '5%'
    },
    title: {
        marginBottom: '1%'
    },
    icone: {
        fontSize: '100px'
    },
    text: {
        maxWidth: '275px',
        marginTop: '4%'
    },
    ty: {
        color: '#4682b4'
    },
    fontTitle: {
        fontWeight: 500,
    },
})
const ServiceMobile = () => {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <div className={classes.title}>
                <Typography
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.2, duration: 1 } }}
                    component={motion.div}
                    className={classes.fontTitle}
                    align='center'
                    variant='h4'
                    color='secondary'>
                    Serviços
                </Typography>

            </div>
            <Box className={classes.container} display='flex' flexDirection='column' alignItems='center' >
                <motion.div
                    initial={{ x: -100, y: -400 }}
                    animate={{ x: 0, y: 0, transition: { delay: 1.4, duration: 1 } }}
                    className={classes.paper}>
                    <div>
                        <Typography
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1.6, duration: 1.2 } }}
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
                            animate={{ opacity: 1, transition: { delay: 1.8, duration: 1.2 } }}
                            component={motion.div}
                            className={classes.ty}
                            variant='body1' >
                            Desenvolvo diversos tipos de web sites com ou sem animações,
                            seu negócio chegará em outro nível.
                        </Typography>
                    </div>
                    <Box
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 2.0, duration: 1.2 } }}
                        component={motion.div}
                        display='flex'
                        justifyContent='center'>
                        <WebIcon
                            className={classes.icone}
                            color='secondary' />
                    </Box>
                </motion.div>
                <motion.div
                    initial={{ x: 100, y: 500 }}
                    animate={{ x: 0, y: 0, transition: { delay: 1.4, duration: 1 } }}
                    className={classes.paper}>
                    <Typography
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1.6, duration: 1 } }}
                        component={motion.div}
                        variant='h4'
                        align='center'
                        color='secondary'>
                        Sistemas
                    </Typography>
                    <div className={classes.text}>
                        <Typography
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1.8, duration: 1 } }}
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
                            animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                            width='100px'
                            src="https://img.icons8.com/ios-filled/100/4a90e2/system-information.png" />
                    </Box>
                </motion.div>
            </Box>
        </div>
    )
}
export default ServiceMobile;