import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    userIcon: {
        justifyContent: 'space-between',
        display: 'flex',
        color: theme.palette.grey.light,
        padding: '0 1em',
    },
    userName: {
        paddingTop: '0.7rem',
        paddingRight: '0.7rem',
        textTransform: 'capitalize',
        color: theme.palette.grey.light,
    },
    appBar: {
        background: theme.palette.common.white,
        color: theme.palette.common.black,
        boxShadow: '0px 0.5px 0px 0px #9b9ba373',
        '& .MuiToolbar-regular': {
            height: '4rem',
            boxShadow: `0px 0.5px 0px 0px ${theme.palette.grey.light}`,
            '& .MuiToolbar-regular': {
                height: '4rem',
            },
            width: '100%',
        },
        toolbar: theme.mixins.toolbar,
        toolbarAlignRight: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        popup: {
            background: theme.palette.grey.main,
            color: theme.palette.common.white,
            fontSize: theme.typography.h4.fontSize,
            padding: '5px',
            width: '10rem',
            textAlign: 'center',
        },
    },
    toolbar: theme.mixins.toolbar,
    toolbarAlignRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    popup: {
        background: theme.palette.grey.main,
        color: theme.palette.common.white,
        fontSize: theme.typography.h4.fontSize,
        padding: '5px',
        width: '10rem',
        textAlign: 'center',
        cursor: 'pointer',
    },
}));


export default useStyles;
