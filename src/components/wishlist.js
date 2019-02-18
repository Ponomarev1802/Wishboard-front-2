import React from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';
import Wish from "./wish"
import Grid from "@material-ui/core/Grid"
import WishFilter from "./wishfilter"
import { wishRequest } from "../actions/wishActions"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

class WishList extends React.Component {
    componentDidMount(){
        const {wishRequest} = this.props;
        wishRequest()
    }
    render(){
  const { classes, wishes } = this.props;

  const wishesList = wishes.map(item => (
      <Grid item><Wish wish={item}/></Grid>
  ))

  return (
      <section>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={16}
      >
          <Grid item xs={12}><WishFilter/></Grid>

          {wishesList}
      </Grid>
      </section>
  );};
}

WishList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
    wishes: store.wishes
});

const mapDispatchToProps = dispatch => ({
    wishRequest: data => dispatch(wishRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(WishList));