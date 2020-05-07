import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

import UserIcon from '../../../assets/icons/user.svg';

import userData from '../../../configs/userData';
import useStyles from './style';

const CustomAppBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const { push } = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbarAlignRight}>
                    <div
                        className={classes.userIcon}
                        aria-describedby={id}
                    >
                        <Typography variant="h5" className={classes.userName}>
                            {userData.userName}
                        </Typography>

                        <img
                            src={UserIcon}
                            alt="User"
                            onClick={handleClick}
                            role="presentation"
                            onKeyDown={handleClick}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div
                    className={classes.popup}
                    onClick={() => {
                        push('/login');
                    }}
                    tabIndex={0}
                    role="button"
                    onKeyDown={() => ''}
                >
                    Logout
        </div>
            </Popover>
        </>
    );
};


export default CustomAppBar;
