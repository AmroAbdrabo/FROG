import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '/imports/ui/Button';
import { Logo } from '/imports/ui/Logo';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  container: {
    padding: theme.spacing(3),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
    textAlign: 'center'
  },
  text: {
    fontSize: '1.2rem',
    color: '#888',
    textAlign: 'center'
  },
  buttonWrapper: {
    margin: theme.spacing(4, 0),
    display: 'flex',
    justifyContent: 'center'
  },
  logoWrapper: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'center'
  }
}));

type ErrorPageProps = {
  message?: string,
  title?: string,
  history: any
};

const ErrorPage = (props: ErrorPageProps) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logoWrapper}>
          <Logo />
        </div>
        <Typography className={classes.heading}>{props.title}</Typography>
        <Typography className={classes.text}>{props.message}</Typography>
        <div className={classes.buttonWrapper}>
          <Button
            onClick={() => {
              props.history.push('/');
            }}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
