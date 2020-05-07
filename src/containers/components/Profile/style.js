import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    inputItem: {
        background: 'white',
        width: '20rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    formContainer: {
        width: '50rem',
        margin: '5rem 15rem',
        background: '#f9f9f9',
        padding: '5rem 0rem'
    },
    formInputs: {
        margin: '1rem',
    },
    inputRow: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
    },
    label: {
        width: '20rem',
        fontSize: '18px',
        paddingTop: '10px',
        textTransform: 'uppercase',
        fontWeight: 900,
        color: '#4f4f4f',
        paddingLeft: '5rem',
    },
    headingText: {
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem',
    },

}));


export default useStyles;
