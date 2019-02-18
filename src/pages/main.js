import Grid from "@material-ui/core/Grid"
import WishList from "../components/wishlist"
import UserCard from "../components/usercard"
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
  root: {
      padding: 10,
      flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
  }
},
});



class Main extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <Grid container className={classes.root} spacing={16} >
              <Grid item md={12} lg={3}>
                <UserCard/>
              </Grid>
              <Grid item md={12} lg={9}>
                <WishList item/>
              </Grid>
          </Grid>
        );
    }
}

export default withStyles(styles)(Main);