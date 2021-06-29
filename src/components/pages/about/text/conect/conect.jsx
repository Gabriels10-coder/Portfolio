import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import { motion } from 'framer-motion';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    marginlogo: {
        marginRight: '1%'
    },
    marginTitle: {
        marginTop: '2%'
    }
})
const Conect = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <div>
                    <Typography
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 2.8 } }}
                        component={motion.div}
                        variant='h6'
                        color='secondary'>
                        Conecte-se
                    </Typography>
                </div>
                <div className={classes.marginTitle}>
                    <motion.a
                        className={classes.marginlogo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 3 } }}

                        href='https://api.whatsapp.com/send?phone="55"11942421224'
                    >
                        <WhatsAppIcon

                            color='secondary' />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 3.2 } }}
                        className={classes.marginlogo}
                        href='https://www.linkedin.com/in/gabriel-soares-maciel-3690a41b4/'>
                        <LinkedInIcon color='secondary' />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 3.4 } }}
                        className={classes.marginlogo}
                        href='https://github.com/Gabriels10-coder'>
                        <GitHubIcon color='secondary' />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 3.6 } }}
                        className={classes.marginlogo}
                        href='https://www.instagram.com/gabriel_s.maciel/'>
                        <InstagramIcon color='secondary' />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 3.8 } }}
                        className={classes.marginlogo}
                        href='https://www.facebook.com/gabriel.soaresmaciel'>
                        <FacebookIcon color='secondary' />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 2, delay: 4.0 } }}
                        className={classes.marginlogo}
                        href='mailto:gsm2015@outlook.com.br'>
                        <EmailIcon color='secondary' />
                    </motion.a>
                </div>
            </div>
        </div>
    )
}

export default Conect;
