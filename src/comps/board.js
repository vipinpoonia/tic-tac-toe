import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ExposureZero } from 'styled-icons/material'
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';
import { connect } from 'react-redux';
import { Row, Card, Text } from './index'
import BoardRow from './boardRow'
import COLORS from '../constants/colors';
import { restartGame } from '../actioncreater/index';

export const BoardCard= Card.extend`
  display: block;
  border: 1px solid ${COLORS.BLUE};
`;

const TextWrapper = styled.div`
  width: 95px
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  justify-content: space-between;
`;

class Board extends PureComponent {
  static propTypes = {
    boardValues: PropTypes.array.isRequired,
    winner: PropTypes.number,
  };

  componentDidUpdate() {
    if (this.props.winner !== null) {
      if (this.props.winner === 2) {
        toast.info(`Game Draw`);
        this.props.restartGame()
      }else{
        const icon = (
          this.props.winner === 1 ? 
          <Times size={15} color={COLORS.WHITE} /> : 
          <ExposureZero size={25} color={COLORS.WHITE} />
        )
        toast.info(<p>winner is {icon}</p>);
        this.props.restartGame()
      }
    }
  }

  renderBoard() {
    const {boardValues} = this.props;
    return boardValues.map((colValues, index) => (
      <BoardRow rowIndex={index}  key={index} colValues={colValues} />
    ));
  }

  getIcon = (val) => {
    if (val===1) {
      return <Times size={25} color={COLORS.BLUE} />;
    }
    if (val===0){
      return <ExposureZero size={35} color={COLORS.BLACK} />;
    }
    return val
  }

  render() {
    return (
      <div>
        <Row gutter gap={10} justifyContent="center">
        <TextWrapper>
          <Text size="medium">Play as:</Text>
          {this.getIcon(this.props.currentTurn)}
        </TextWrapper>
        </Row>
        <Row justifyContent="center" gap={10}>
          <BoardCard>
            {this.renderBoard()}
          </BoardCard>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ gameState }) => ({
  reseting: gameState.reseting, 
  updateing: gameState.updateing,
  boardValues: gameState.boardState, 
  winner: gameState.winner,
  currentTurn: gameState.currentTurn
});

const actioncreators = {
  restartGame
};

export default connect(mapStateToProps, actioncreators)(Board);