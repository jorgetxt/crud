import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: "1%" ,
      width: '100%',
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      />

    <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      />
    <Button variant="contained" color="primary">enviar</Button>

    </form>
  );
}

