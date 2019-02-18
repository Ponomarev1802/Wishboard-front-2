import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Comment from '@material-ui/icons/Comment';
import Add from '@material-ui/icons/Add';
import Pageview from '@material-ui/icons/Pageview';
import Calendar from '@material-ui/icons/CalendarToday';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
      maxWidth: 250,
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-around",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },

});

class MediaControlCard extends  React.Component {

render()
{
    const { classes, theme, wish } = this.props;
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {wish.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {wish.cost}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {wish.description}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="Комментариев">
                        <Comment/>
                    </IconButton>
                    <IconButton aria-label="Копировать к себе">
                        <Add/>
                    </IconButton>
                    <IconButton aria-label="Next">
                        <Pageview/>
                    </IconButton>
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={wish.image}
                title="Live from space album cover"
            />
        </Card>
    );
}
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);