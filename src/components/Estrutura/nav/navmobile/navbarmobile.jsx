import React, { useState } from 'react';

import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    makeStyles,
    ListItemText,
    Box

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
    aba: {
        background: '#fff',
        width: '300px',
        height: '100%',
    },
    container: {
        marginTop: '40%',
        marginLeft:'30px'
    },
    listItemText: {
        fontSize: '40px',
        color: '#1976d2',
    },

})
const NavMobile = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div>
            <AppBar variant='outlined' color='primary'>
                <Toolbar>
                    <IconButton onClick={() => setOpen(true)} >
                        <MenuIcon fontSize='large' color='secondary' />
                    </IconButton>
                    <Drawer
                        anchor='left'
                        onClose={() => setOpen(false)}
                        open={open}>
                        <List className={classes.aba} >
                            <Box display='flex'  className={classes.container} >
                                <div >
                                    <ListItem
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.3, } }}
                                        component={motion.a}
                                        href='/'
                                        button
                                         >
                                        <ListItemText  classes={{ primary: classes.listItemText }} primary='Inicio' />
                                    </ListItem>
                                    <ListItem
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.5, } }}
                                        component={motion.a}
                                        href='/about'
                                        button  >
                                        <ListItemText  classes={{ primary: classes.listItemText }} primary='Sobre Mim' />
                                    </ListItem>
                                    <ListItem
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.7, } }}
                                        component={motion.a}
                                        href='/projects'
                                        button >
                                        <ListItemText classes={{ primary: classes.listItemText }} primary='Projetos' />
                                    </ListItem>
                                    <ListItem
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.7, } }}
                                        component={motion.a}
                                        href='/services'
                                        button >
                                        <ListItemText classes={{ primary: classes.listItemText }} primary='Serviços' />
                                    </ListItem>
                                    <ListItem
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.9, } }}
                                        component={motion.a}
                                        button
                                        href='/contact'
                                         > 
                                        <ListItemText classes={{ primary: classes.listItemText }} primary='Contato' />
                                    </ListItem>
                                   
                                </div>
                            </Box>
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavMobile;