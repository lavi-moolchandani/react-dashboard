import { makeStyles } from '@material-ui/core';

const drawerWidth = '14rem';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    headerLogo: {
        height: '48px',
        margin: '5px auto',
    },
    drawerIcon: {
        padding: '1em',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiListItemText-primary': {
            fontSize: '0.8rem',
            fontWeight: 'bold',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey.background,
        height: '100vh',
        padding: '4rem 1rem 0 1rem',
    },
    sublist: {
        paddingLeft: '4rem',
        background: theme.palette.primary.dark,
    },
    noStyle: {
        textDecoration: 'none',
        color: theme.palette.common.white,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.common.white,
    },
    listItem: {
        display: 'flex',
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        padding: '5px 20px'
    },
}));

export default useStyles;
