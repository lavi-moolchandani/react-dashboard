import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey.background,
        height: '100vh',
        width: '83vw',
        position: 'relative',
        paddingTop: '4rem',
        overflow: 'scroll',
    },
}));

export default useStyles;