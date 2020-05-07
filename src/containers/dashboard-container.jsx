import React from 'react';

import CustomAppBar from './components/appbar';
import CustomSidebar from './components/sidebar';

import useStyles from './style';

const DashboardContainer = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomAppBar />
            <CustomSidebar />
            <main className={classes.content}>
                <div>{children}</div>
            </main>
        </div>
    );
};

export default DashboardContainer;