import React from 'react';
import TecnologiaMobile from './tecnologias/tecMobile';
import { makeStyles, Typography} from '@material-ui/core';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
    background: {

        width: '300px',
        
        padding: '1% 9%',
        borderRadius: '20px',
        boxShadow: '1px 1px 1px 1px #1976d2',
       
        marginTop: '-10%',
        marginBottom:'5%'
    },
    title: {
        marginBottom: '5%',
        width:'300px'
    },
    cargo: {
        width: '80%',
        marginTop: '6%',
    },
    about: {
        width: '250px',
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
   
    align: {
        display: 'flex',
        justifyContent:'center'
    },
    stylepic: {
        borderRadius: '20px'
    }

})
const TextMobile = () => {
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
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 1 } }}
                            component={motion.div}
                            variant='h4'
                            color='secondary'>
                            Gabriel S Maciel
                        </Typography>
                    </div>
                    <div>
                        <Typography
                           initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 1 } }}
                            component={motion.div} color='secondary' variant='h5' >
                            Desenvolvedor Full Stack utilizando das tecnologias no Front End
                            <span className={classes.span}> ReactJS</span> e no Back  End <span className={classes.span}>NodeJS.</span>
                        </Typography>
                    </div>
                    <div >
                        <Typography
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, delay: 1 } }}
                            component={motion.div}
                            variant='h6'
                            color='secondary'
                            className={classes.about}>
                            Ola  sou o Gabriel,  sou apaixonado por programação busco sempre adquirir conhecimento,
                            sou uma pessoa simpática, trabalho plenamente em equipe , sempre buscando ajudar os companheiros
                            e a  empresa.
                        </Typography>
                        <div className={classes.tec}>
                            <TecnologiaMobile />
                        </div>
    
                    </div>
                </motion.div>
              
            </div>
        </div>
    )
}

export default TextMobile;