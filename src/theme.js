import { createMuiTheme } from '@material-ui/core/styles';

const base = {
    palette: {
        type: 'light',
        common: {
            black: '#000000',
            white: '#FFFFFF',
            grey: '#DDDDDD',
        },
        primary: {
            main: '#005B9B',
            dark: '#173759',
            contrastText: '#FFFFFF',
            custom: 'linear-gradient(to right, #005b9b 0%, #002b41 100%)',
        },
        success: {
            main: '#16C09C',
            light: '#D0F2EB',
        },
        error: {
            main: '#D75A4A',
            light: '#F7DEDB',
        },
        warning: {
            main: '#F79D01',
            light: '#FDF4CC',
        },
        grey: {
            main: '#1D1D1F',
            primary: '#9B9BA3',
            light: '#9b9ba3',
            background: '#f1f1f1',
            faded: '#fbfbfb',
            lightBackground: '#f7f7f7',
        },
        labels: {
            draft: '#017df7',
            pending: '#f79d01',
            inactive: '#9b9ba3',
            success: '#16C09C',
            draftBackground: 'rgba(1, 125, 247, 0.15)',
            pendingBackground: 'rgba(247, 157, 1, 0.15)',
            inactiveBackground: 'rgba(155, 155, 163, 0.15)',
            successBackground: 'rgba(22, 192, 156, 0.15)',
        },
    },
    typography: {
        fontSize: 12,
        htmlFontSize: 14,
        fontFamily: 'Trade Gothic LT',
        h1: {
            fontFamily: 'Trade Gothic LT Bold',
            fontSize: 48,
            fontWeight: 'bold',
        },
        h2: {
            fontFamily: 'Trade Gothic LT Bold',
            fontSize: 36,
            fontWeight: 'bold',
        },
        h3: {
            fontFamily: 'Trade Gothic LT Bold',
            fontSize: 24,
            fontWeight: 'bold',
            letterSpacing: ' 0.42px',
        },
        h4: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        h5: {
            fontSize: 16,
            fontWeight: 500,
        },
        h6: {
            fontSize: 12,
        },
        subHeading: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 500,
            '@media (min-width: 0) and (max-width: 480px)': {
                lineHeight: 1.4,
            },
        },
        subtitle2: {
            fontSize: 11,
        },
        body1: {
            fontSize: 16,
        },
        body2: {
            fontSize: 14,
        },
        button: {
            textTransform: 'none',
        },
    },
    shadows: Array(25).fill('none'),
};

const theme = createMuiTheme(base);

export default theme;
