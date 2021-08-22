import React from 'react';
import Tecnologia from './tecnologias/tec';
import { makeStyles, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
    background: {

        width: '50%',
        height: '0%',
        padding: '1% 3%',
        borderRadius: '20px',
        boxShadow: '1px 1px 1px 1px #1976d2',
        marginLeft: '12%',
        marginTop: '-21%'
    },
    title: {
        marginBottom: '5%',
    },
    cargo: {
        width: '80%',
        marginTop: '6%',
    },
    about: {
        width: '100%',
        marginTop: '6%'
    },
    span: {
        color: '#120a8f ',

    },
    tec: {
        marginTop: '5%',

    },
    conect: {
        marginTop: '5%',
    },
    pic: {
        marginTop: '-21%',
        marginLeft: '7%',
        borderRadius: '10%'
    },
    align: {
        display: 'flex',
        flexDirection: 'row'
    },
    stylepic: {
        borderRadius: '20px'
    }

})
const Text = () => {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <div className={classes.align} >
                <motion.div
                    initial={{ x: -800, y: -800 }}
                    animate={{ x: 0, y: 0, transition: { duration: 1.5, } }}
                    className={classes.background}>
                    <div className={classes.title}>
                        <Typography
                            initial={{ opacity: 0,scale:0 }}
                            animate={{ opacity: 1,scale:1, transition: { duration: 1.2,delay:1} }}
                            component={motion.div}
                            variant='h3'
                            color='secondary'>
                            Gabriel S Maciel
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            initial={{ opacity: 0,scale:0 }}
                            animate={{ opacity: 1,scale:1, transition: { duration: 1.2,delay:1  } }}
                            component={motion.div} color='secondary' variant='h5' >
                            Desenvolvedor Full Stack utilizando das tecnologias no Front End
                            <span className={classes.span}> ReactJS</span> e no Back  End <span className={classes.span}>NodeJS.</span>
                        </Typography>
                    </div>
                    <div >
                        <Typography
                            initial={{ opacity: 0,scale:0 }}
                            animate={{ opacity: 1,scale:1, transition: { duration: 1.2, delay: 1 } }}
                            component={motion.div}
                            variant='h6'
                            color='secondary'
                            className={classes.about}>
                            Ola  sou o Gabriel,  sou apaixonado por programação busco sempre adquirir conhecimento,
                            sou uma pessoa simpática, trabalho plenamente em equipe , sempre buscando ajudar os companheiros
                            e a  empresa.
                        </Typography>
                        <div className={classes.tec}>
                            <Tecnologia />
                        </div>
                    </div>
                </motion.div>
                <div className={classes.pic}>
                    <motion.img 
                    initial={{x:200,y:-600}}
                    animate={{x:0,y:0,transition:{duration:2}}}
                    className={classes.stylepic} 
                    width='75%' height='%75'
                     src='./img/foto.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Text;