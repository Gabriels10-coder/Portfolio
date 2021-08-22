import React from 'react';
import {
    makeStyles,
    Button,
    Typography
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
    paper: {
        width: 'max-content',
        padding: ' 10px',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 3px 3px -2px #1976d2, 0px 3px 4px 0px #1976d2, 0px 1px 8px 0px #1976d2',


    },

    imgProject: {
        width: '305px',
        height: '300px'

    },
    marginName: {
        marginTop: '1%'
    },
    marginTecs: {
        marginTop: '1%',

    },
    text: {
        maxWidth: '390px',
        marginTop: '1%'
    },
    buttonIcon: {
        marginRight: '5px'
    },
    marginButton: {
        marginTop: '1%',
        marginBottom:'8%'
    },
    titlefont: {
        fontWeight: 600,
    },
    fontText: {
        color: '#4682b4'
    },
    a: {
        textDecoration: 'none',
        color: 'white'
    }
})
const ItemMobile = (props) => {
    const classes = useStyles();
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 1.1 } }}
                component={motion.div}
                className={classes.paper}>
                <motion.img
                    initial={{ y: -400, x: -400 }}
                    animate={{ x: 0, y: 0, transition: { duration: 1, delay: 1.3 } }}
                    component={motion.div}
                    className={classes.imgProject}
                    src={props.imgProjeto} />
            </motion.div>

            <div className={classes.marginName}>
                <Typography
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 1.5 } }}
                    component={motion.div}
                    className={classes.titlefont}
                    variant='h6'
                    color='secondary'>
                    {props.projeto}
                </Typography>

            </div>
            <div className={classes.marginTecs}>
                <motion.img

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 1.7 } }}
                    width='10%'
                    src={props.tec1}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 1.9 } }}
                    width='10%'
                    src={props.tec2}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 2.1 } }}
                    width='10%'
                    src={props.tec3}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 2.3 } }}
                    width='10%'
                    src={props.tec4}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 2.5 } }}
                    width='10%'
                    src={props.tec5}
                    alt='img' />
            </div>
            < div className={classes.text}>
                <Typography
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 2.7 } }}
                    component={motion.div}
                    className={classes.fontText}
                    color='secondary'
                    variant='subtitle1'>
                    {props.text}
                </Typography>
            </div>
            <div>
                <Button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 2.9 } }}
                    whileTap={{ background: 'white' }}

                    component={motion.button}
                    href='https://github.com/Gabriels10-coder/animeland'
                    color='secondary'
                    className={classes.marginButton}
                    variant='contained'>
                    <motion.a
                      whileTap={{ color: '#1976d2' }} 
                      className={classes.a} 
                      href='https://github.com/Gabriels10-coder/animeland' >
                        <GitHubIcon className={classes.buttonIcon} />
                        Ver  código
                    </motion.a>
                </Button>
            </div>
        </div>

    )
}

export default ItemMobile;