import React, { PureComponent } from 'react';
import Board from '../comps/board'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  updateRowCount, 
  updateColCount, 
  updateStreakCount 
} from '../actioncreater/index';


class Dashboard extends PureComponent {
  static propTypes = {
    updateRowCount: PropTypes.func.isRequired,
    updateColCount: PropTypes.func.isRequired,
    updateStreakCount: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.updateRowCount(3)
    this.props.updateColCount(3)
    this.props.updateStreakCount(3);
  }

  render() {
    return (
      <div>
        <p>Player one is always 0 for now</p>
        <Board />
      </div>
    );
  }
}

const actioncreators = {
  updateRowCount,
  updateColCount, 
  updateStreakCount
};

export default connect(null, actioncreators)(Dashboard);