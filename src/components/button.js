  
import React from 'react'
import { Button as MButton , makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    
}))

 function Button(props) {

    const classes = useStyles();

    return (
        <MButton
        type={props.type}
        
        className={classes.submit}
        onClick={props.onClick}
        >
            {props.variant}
        </MButton>
    )
}

export default Button