import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../constants/colors';
import { Times } from 'styled-icons/fa-solid';
import { ExposureZero } from 'styled-icons/material'
import { 
  updateBoardCell, 
} from '../actioncreater/index';


const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size ? `${size}px` : '30px'};
  background-color: ${COLORS.WHITE}
  color: ${COLORS.TEXT_PRIMARY};
  height: ${({ size }) => size ? `${size}px` : '30px'};
  font-size: 14px;
  border: 1px solid ${COLORS.BLUE};
  cursor: pointer;
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
      <Cell onClick={this.handleClick} size={50}>
        {this.getIcon(this.props.children)}
      </Cell>
    );
  }
}

const actioncreators = {
  updateBoardCell
};

export default connect(null, actioncreators)(BoardCell);