// @flow

import React from 'react';
import { type ActivityPackageT, type ActivityDbT } from 'frog-utils';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ApiForm from '../GraphEditor/SidePanel/ApiForm';
import { type PropsT } from './types';

/**
 * The final screen displayed after the creation of a single activity.
 * @param {ActivityPackageT} activityType - The object containing the details of the activity to be configured
 * @param {Function} onSubmit - Callback function for handling the 'Submit' button
 * @param {Function} onReturn - Callback function for handling the 'Back' button
 */
export default class ConfigPanel extends React.Component<
  {
    activityType: ActivityPackageT,
    onSubmit: Function,
    onReturn: Function
  } & PropsT,
  { activity: ActivityDbT }
> {
  render() {
    console.log(this.props.activityType);
    const { id, config } = this.props.activityType;
    const { classes } = this.props;
    return (
      <Card raised className={classes.card}>
        <Typography variant="h5" component="h2">
          <IconButton
            onClick={() => this.props.onReturn()}
            className={classes.back_button}
          >
            <ArrowBack />
          </IconButton>
          Edit the Activity
        </Typography>
        <ApiForm
          activityType={id}
          config={config}
          onConfigChange={x => this.setState({ activity: x })}
          hidePreview
          noOffset
          hideValidator
        />
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.onSubmit(this.state.activity)}
          >
            Publish
          </Button>
        </CardActions>
      </Card>
    );
  }
}
