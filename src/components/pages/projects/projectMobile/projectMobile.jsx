import React from 'react';
import ItemMobile from '../itemProject/itemMobile';
import { motion } from 'framer-motion';
import Repositorios from '../../../../data/data';
import {
    Box,
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        margin: '5% 5%',
        marginBottom: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    titleWork: {
        marginTop: '20%',
        display: 'flex',
        flexDirection: 'column'
    },
    marginsub: {
        marginTop: '4%',

    },
    a: {
        textDecoration: 'none',
        color: '#4682b4',
        fontSize: '19px',
        marginTop: '8px',
        display:'flex',
      justifyContent:'center'
    },
    fontsub: {
        fontSize:'19px',
        color: '#4682b4',

    },
    containerSub: {
      maxWidth:'380px'
    }
})
const ProjectsMobile = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.titleWork}>
                <Typography
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
                    component={motion.div}
                    align='center'
                    variant='h4'
                    color='secondary'>
                    Trabalhos Recentes
                </Typography>
                <Box
                    className={classes.marginsub}
                    display='flex'
                    alignItems='center'
                    flexDirection='column'>
                    <div className={classes.containerSub}>
                        <Typography
                        align='center'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1, delay: 0.7 } }}
                            component={motion.div}
                            className={classes.fontsub}
                            >
                            Projetos disponiveis no GitHub
                        </Typography>
                        <motion.a align='center'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }}
                            className={classes.a}
                            href='https://github.com/Gabriels10-coder'>https://github.com/Gabriels10-coder
                        </motion.a>
                    </div>
                </Box>
            </div>
            <div className={classes.item}>
                {Repositorios.map(list => (
                    <ItemMobile
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

export default ProjectsMobile;