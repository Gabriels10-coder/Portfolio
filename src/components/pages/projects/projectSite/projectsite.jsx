import React from 'react';
import Item from '../itemProject/item';
import { motion } from 'framer-motion';
import Repositorios from '../../../../data/data';
import {
    Box,
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        marginLeft: '4%',
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleWork: {
        marginTop: '6%'
    },
    marginsub: {
        marginTop: '1%',
    },
    a: {
        textDecoration: 'none',
        color: '#4682b4',
        fontSize: '20px',
        marginTop: '8px'
    },
    fontsub: {
        color: '#4682b4',
    }
})
const ProjectsSite = () => {
    const classes = useStyles();
    return (
        <div>
            
                <div className={classes.titleWork}>
                    <Typography
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                        component={motion.div}
                        align='center'
                        variant='h3'
                        color='secondary'>
                        Trabalhos Recentes
                    </Typography>
                    <Box
                        className={classes.marginsub}
                        display='flex'
                        alignItems='center'
                        flexDirection='column'>
                        <Typography
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1, delay: 0.7 } }}
                            component={motion.div}
                            className={classes.fontsub}
                            variant='h6'>
                            Veja todos projetos no repositório no Git Hub
                        </Typography>
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }}
                            className={classes.a}
                            href='https://github.com/Gabriels10-coder'>https://github.com/Gabriels10-coder
                        </motion.a>
                    </Box>
                </div>
                <div className={classes.item}>
                    {Repositorios.map(list => (
                        <Item
                            imgProjeto={list.img}
                            projeto={list.projeto}
                            href={list.url}
                            tec1={list.tec1}
                            tec2={list.tec2}
                            tec3={list.tec3}
                            tec4={list.tec4}
                            tec5={list.tec5}
                            text={list.text}
                        />
                    ))}
                </div>
           
        </div>


    )
}

export default ProjectsSite;