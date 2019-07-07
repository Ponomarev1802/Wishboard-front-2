import React from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Follows from '@material-ui/icons/SupervisedUserCircle';
import Message from '@material-ui/icons/Message';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  card: {
      display: 'flex',
            [theme.breakpoints.up('lg')]: {
                flexDirection: "column",
            },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    margin: "auto",
      maxWidth: 250,
  },
  cover: {
    width: "100%",
      [theme.breakpoints.up('lg')]: {
          height: 200,
    },
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

class UserCard extends React.Component {

    render(){
  const { classes, theme, user } = this.props;

  return (
    <Card className={classes.card}>
              <CardMedia
        className={classes.cover}
        image={user.photo}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
              {user.nickname}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.surname} {user.first_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
              {user.birthday}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button aria-label="Previous">
            <Follows/>  {user.follows_count}
          </Button>
          <Button aria-label="Play/pause">
            <Follows/> {user.followers_count}
          </Button>
          <Button aria-label="Написать сообщение">
            <Message/>
          </Button>
        </div>
      </div>

    </Card>
  );};
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};



const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(UserCard));