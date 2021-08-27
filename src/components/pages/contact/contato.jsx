import {  Typography } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Estrutura from '../../Estrutura/Estrutura';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram'
import EmailIcon from '@material-ui/icons/Email';
import './style.css';
import { motion } from 'framer-motion';



const Contato = () => {

    return (
        <div >
            <Estrutura >
                <div className='container--contact'>
                 
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1.2, delay: 0.5 } }}
                            className='container--title'>
                            <Typography variant='h3' color='secondary'>Contate me</Typography>
                            <Typography variant='h4' color='secondary'>Interaja comigo nas redes sociais</Typography>
                        </motion.div>
                        <div className='container--icons'>
                            <div className='container--ind--icon'>
                                <motion.a
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1.2, delay: 0.5 } }}
                                    whileHover={{ y: '-10px', transition: { type: "spring", delay: 0.2 } }}
                                    href='https://github.com/Gabriels10-coder'>
                                    <GitHubIcon fontSize='large' color='secondary' />
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    className='margin--text--icone'>
                                    <Typography color='secondary' variant='h4'>Me siga no GitHub.</Typography>
                                </motion.div>

                            </div>
                            <div className='container--ind--icon'>
                                <motion.a
                                    href='https://www.linkedin.com/in/gabriel-soares-maciel-3690a41b4/'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    whileHover={{ y: '-10px', transition: { type: "spring", delay: 0.2 } }}>
                                    <LinkedInIcon fontSize='large' color='secondary' />
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    className='margin--text--icone'>
                                    <Typography color='secondary' variant='h4'>Conect-se comigo no Linkedin.</Typography>
                                </motion.div>
                            </div>
                            <div className='container--ind--icon'>
                                <motion.a
                                    href='https://www.facebook.com/gabriel.soaresmaciel/'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    whileHover={{ y: '-10px', transition: { type: "spring", delay: 0.2 } }}>
                                    <FacebookIcon fontSize='large' color='secondary' />
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    className='margin--text--icone'>

                                    <Typography variant='h4' color='secondary'>Me adicione no facebook.</Typography>
                                </motion.div>
                            </div>
                            <div className='container--ind--icon'>
                                <motion.a
                                    href='https://www.instagram.com/gabriel_s.maciel/'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    whileHover={{ y: '-10px', transition: { type: "spring", delay: 0.2 } }}  >
                                    <InstagramIcon fontSize='large' color='secondary' />
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    className="margin--text--icone">
                                    <Typography color='secondary' variant='h4'>Me siga no instagram.</Typography>
                                </motion.div>

                            </div>
                            <div className='container--ind--icon'>
                                <motion.a
                                    href='mailto:gsm2015@outlook.com.br'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    whileHover={{ y: '-10px', transition: { type: "spring", delay: 0.2 } }}>
                                    <EmailIcon fontSize='large' color='secondary' />
                                </motion.a>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', duration: 1, delay: 0.5 } }}
                                    className="margin--text--icone">
                                    <Typography color='secondary' variant='h4'>Entre em contato comigo.</Typography>
                                </motion.div>
                            </div>
                        </div>
                       
                    </div>
               

            </Estrutura>


        </div>
    )

}


export default Contato