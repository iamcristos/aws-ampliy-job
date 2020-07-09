import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {margin: theme.spacing(7,0,4)},
    logo: { padding: 7}
}));
export default function Header() {
    return (
        <AppBar position='relative'>
            <Toolbar>
                <Typography variant="h5" color="inherit" noWrap>
                    SalaryJobApp
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
