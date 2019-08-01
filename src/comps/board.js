import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Row, Card } from './index'
import BoardRow from './boardRow'

class Board extends PureComponent {
  static propTypes = {
    boardValues: PropTypes.array.isRequired,
  };

  componentDidUpdate() {
    console.log("winner............", this.props.winne)
    if (this.props.winner !== null) {
      console.log("winner............")
      toast.error(`winner is :${this.props.winner}`);
    }
  }

  renderBoard() {
    const {boardValues} = this.props;
    return boardValues.map((colValues, index) => (
      <BoardRow rowIndex={index}  key={index} colValues={colValues} />
    ));
  }

  render() {
    return (
      <Row>
        <Card>
          {this.renderBoard()}
        </Card>
      </Row>
    );
  }
}

const mapStateToProps = ({ gameState }) => ({
  reseting: gameState.reseting, 
  updateing: gameState.updateing,
  boardValues: gameState.boardState, 
  winner: gameState.winner
});

export default connect(mapStateToProps, null)(Board);