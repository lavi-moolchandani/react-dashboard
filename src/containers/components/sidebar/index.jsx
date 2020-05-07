import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
    ListItem, ListItemText, List, Drawer,
} from '@material-ui/core';

import clsx from 'clsx';
import useStyles from './style';
import SIDEBAR_CONFIG from '../../../configs/sidebar';


const CustomSidebar = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <List>
                {SIDEBAR_CONFIG.map((item) => {
                    const { ICON } = item;
                    return (
                        <Fragment key={item.NAME}>
                            <ListItem button key={item.NAME}>
                                <Link to={item.LINK} className={clsx(classes.noStyle, classes.listItem)}>
                                    <div className={classes.iconContainer}>
                                        <ICON />
                                    </div>
                                    <ListItemText primary={item.NAME} />
                                </Link>
                            </ListItem>
                        </Fragment>
                    );
                })}
            </List>
        </Drawer>
    );
};

export default CustomSidebar;
