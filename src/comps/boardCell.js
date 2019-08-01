import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../constants/colors';
import { 
  updateBoardCell, 
} from '../actioncreater/index';


const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: ${COLORS.WHITE}
  color: ${COLORS.TEXT_PRIMARY};
  height: ${({ height }) => height ? `${height}px` : '30px'};
  font-size: 14px;
  border: 1px solid ${COLORS.BLUE};
  border-radius: 1px;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

class BoardCell extends PureComponent {
  static propTypes = {
    updateBoardCell: PropTypes.func.isRequired,
    rowIndex: PropTypes.number.isRequired,
    colIndex: PropTypes.number.isRequired
  };

  handleClick = () => {
    this.props.updateBoardCell(this.props.rowIndex, this.props.colIndex);
  }

  render() {
    return (
      <Cell onClick={this.handleClick}>
        {this.props.children}
      </Cell>
    );
  }
}

const actioncreators = {
  updateBoardCell
};

export default connect(null, actioncreators)(BoardCell);