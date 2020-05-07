import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import useStyles from './style';
import { useForm, Controller } from 'react-hook-form';
import formData from '../../../configs/form';

const Profile = () => {
    const classes = useStyles();
    const {
        handleSubmit,
        errors,
        control,
    } = useForm({ mode: 'onChange' });
    const onSubmit = (value) => {
        console.log(value);
    }
    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <div className={classes.formHeading}>
                    <Typography variant='h3' component='div' className={classes.headingText}>
                        Profile Form
                    </Typography>
                </div>
                <form>
                    <div className={classes.formInputs}>
                        {formData.map((item, index) => {
                            return (
                                <div className={classes.inputRow} key={item.name}>
                                    <Typography variant='body1' className={classes.label}>
                                        {item.label}
                                    </Typography>
                                    <Controller
                                        as={(
                                            <TextField
                                                error={!!(errors && errors[item.name])}
                                                variant="outlined"
                                                fullWidth
                                                className={classes.inputItem}
                                            />
                                        )}
                                        name={item.name}
                                        type={item.type}
                                        placeholder={item.placeholder}
                                        control={control}
                                        rules={{
                                            required: true,
                                            pattern: item.pattern ? {
                                                value: /^.+@.+\..+$/,
                                                message: 'invalid Email',
                                            } : null,
                                        }}
                                        defaultValue=""
                                    />
                                </div>
                            );
                        })}
                        <div className={classes.buttonContainer}>
                            <Button
                                className={classes.createButton}
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Profile;