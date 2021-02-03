import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const zipCode = '02186'
const queryUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'Black'
    },

    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "White",
        // backgroundColor: 'Red'

    },

    headshot: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "White",
        // backgroundColor: 'Red'

    },
    icon: {
        textAlign: 'center',
        color: "White",
        fontSize: "63px",
        paddingLeft: "20px"
        // backgroundColor: 'Red'
    },
    iconCtn: {
        display: "flex",
        justifyContent: "Center",
    },
    whiteLine: {
        color: "White",
        backgroundColor: "White",
        height: 5,
        margin: 24,
    },
    rightColumn: {
        direction: "column",
        justify: "center",
        alignItems: "center",
    },

}));

export default function SkiMountainWeather() {
    const classes = useStyles();
console.log(queryUrl)
    return (
        <div className={classes.root}>

                        <h1 className={classes.title}>Full Stack Web Developer</h1>
        </div>
    );
}
