import React , {Component} from 'react' 
import {AppBar, Toolbar,IconButton,List, ListItem,ListItemText, makeStyles,Container} from '@material-ui/core' ; 
import {ClassSharp, Home} from "@material-ui/icons"
const NavLinks=[
    {title:'About' , path:'#'},
    {title:'Contact', path:'#'},
    {title:'Join' , path:'#'},
    {title:'Blog', path:'#'},
    {title:'Home' , path:'#'},
    {title:'Sign', path:'#'}
] 
const useStyles=makeStyles({
    navbarDisplayFlex:{
        display:'flex',
        justifyContent:'space-between'
    },
    navDisplayFlex:{
        display:'flex',
        justifyContent:'space-between'
    },
    LinkText:{
        textDecoration:'none' ,
        textTransform:'uppercase',
        color:'white'

    }
});
const Navbar=()=>{
    const classes=useStyles() ; 
    return(
        <AppBar position='static'>
            <Toolbar>
                <Container maxWidth='md' className={classes.navbarDisplayFlex}>
                    <IconButton edge='start' color='inherit' aria-label='Home'>
                        <Home fontSize='large'/>
                    </IconButton>
                    <List component='nav' aria-labelledby='main navigation' className={classes.navDisplayFlex}>
                        {NavLinks.map(({title,path})=>(
                            <a href = {path} key={title} className = {classes.LinkText}>
                                <ListItem button>
                                    <ListItemText primary={title}/>
                                </ListItem>
                            </a>
                        )
                        
                        )}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar ;