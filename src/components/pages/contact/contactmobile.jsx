import React from 'react';
import {
    makeStyles,
    Typography,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { motion } from 'framer-motion';
const useStyles = makeStyles({

    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40%',
    },
    paper: {
        marginTop: '8%',
        boxShadow: '1px 1px 1px 1px #1976d2',
        width: 'max-content',
        padding: '15% 6%'
    },
    subdiv: {
        padding: '3%'
    },
    email: {
        marginLeft: '-3%',
        marginTop: '20%'
    },
    social: {
        marginTop: '20%',


    },
    icons: {
        display: 'flex',
        justifyContent: 'center'
    },
    a: {
        marginRight: '3%',
        textDecoration: 'none',
        color: '#1976d2'
    },
    contact: {
        marginTop: '-17%',

    },

})

const ContactMobile = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <motion.div
                initial={{ y: -500, x: 500, scale: 0.5, opacity: 0 }}
                animate={{ y: 0, x: 0, scale: 1, opacity: 1, transition: { duration: 1.5, delay: 0.5 } }}
                className={classes.paper}>

                    <div className={classes.contact} >
                        <Typography
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.9 } }}
                            component={motion.div}
                            align='center'
                            variant='h4'
                            color='secondary'>
                            Contato
                        </Typography>
                    </div>
                    <div className={classes.email}>
                        <Typography align='center' variant='h5' color='secondary'>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1.5, delay: 1.2 } }}
                                whileHover={{ borderBottom: '3px solid #1976d2' }}
                                className={classes.a}
                                href='mailto:gsm2015@outlook.com.br'>
                                gsm2015@outlook.com.br
                            </motion.a>
                        </Typography>
                    </div>
                    <div className={classes.social}>
                        <Typography
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1.5, delay: 1.4 } }}
                            component={motion.div}
                            color='secondary'
                            variant='h5'
                            align='center'>
                            Social
                        </Typography>
                        <div className={classes.icons} >
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1.5, delay: 1.6 } }}
                                whileHover={{ scale: 1.2, rotate: 360, }}
                                className={classes.a}

                                href='https://api.whatsapp.com/send?phone="55"11942421224'
                            >
                                <WhatsAppIcon color='secondary' />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1.5, delay: 1.8 } }}
                                whileHover={{ scale: 1.2, rotate: 360, }}
                                className={classes.a}
                                href='https://www.linkedin.com/in/gabriel-soares-maciel-3690a41b4/'>
                                <LinkedInIcon color='secondary' />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1.5, delay: 2 } }}
                                whileHover={{ scale: 1.2, rotate: 360, }}
                                className={classes.a}
                                href='https://github.com/Gabriels10-coder'>
                                <GitHubIcon color='secondary' />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1.5, delay: 2.2 } }}
                                whileHover={{ scale: 1.2, rotate: 360, }}
                                className={classes.a}
                                href='https://www.instagram.com/gabriel_s.maciel/'>
                                <InstagramIcon color='secondary' />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 1.5, delay: 2.4 } }}
                                whileHover={{ scale: 1.2, rotate: 360, }}
                                className={classes.a}
                                href='https://www.facebook.com/gabriel.soaresmaciel'>
                                <FacebookIcon color='secondary' />
                            </motion.a>
                        </div>
                    </div>
            </motion.div>
        </div >
    )
}

export default ContactMobile;