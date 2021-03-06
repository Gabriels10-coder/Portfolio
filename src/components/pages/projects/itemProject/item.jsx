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
        padding: ' 12px 12px',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 3px 3px -2px #1976d2, 0px 3px 4px 0px #1976d2, 0px 1px 8px 0px #1976d2',


    },

    imgProject: {
        width: '350px',
        height: '250px'

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
const Item = (props) => {
    const classes = useStyles();
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                component={motion.div}
                className={classes.paper}>
                <motion.img

                    component={motion.div}
                    className={classes.imgProject}
                    src={props.imgProjeto} />
            </motion.div>

            <div className={classes.marginName}>
                <Typography
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    component={motion.div}
                    className={classes.titlefont}
                    variant='h6'
                    color='secondary'>
                    {props.projeto}
                </Typography>

            </div>
            <div className={classes.marginTecs}>
                <motion.img

                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, delay: 0.5 } }}
                    width='7%'
                    src={props.tec1}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, delay: 0.5 } }}
                    width='7%'
                    src={props.tec2}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, delay: 0.5 } }}
                    width='7%'
                    src={props.tec3}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, delay: 0.5 } }}
                    width='7%'
                    src={props.tec4}
                    alt='img' />
                <motion.img
                    initial={{ opacity: 0, scale: 0, rotate: 360 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, delay: 0.5 } }}
                    width='8%'
                    src={props.tec5}
                    alt='img' />
            </div>
            < div className={classes.text}>
                <Typography
                    initial={{ opacity: 0,scale:0 }}
                    animate={{ opacity: 1,scale:1, transition: { duration: 1, delay: 0.5 } }}
                    component={motion.div}
                    className={classes.fontText}
                    color='secondary'
                    variant='body1'>
                    {props.text}
                </Typography>
            </div>
            <div>
                <Button
                    initial={{ opacity: 0,scale:0 }}
                    animate={{ opacity: 1,scale:1, transition: { duration: 1, delay: 0.5 } }}
                    whileHover={{ background: 'white' }}

                    component={motion.button}
                    href='https://github.com/Gabriels10-coder/animeland'
                    color='secondary'
                    className={classes.marginButton}
                    variant='contained'>
                    <motion.a
                        whileHover={{ color: '#1976d2' }}
                        className={classes.a}
                        href='https://github.com/Gabriels10-coder/animeland' >
                        <GitHubIcon className={classes.buttonIcon} />
                        Ver  c??digo
                    </motion.a>
                </Button>
            </div>
        </div>

    )
}

export default Item;