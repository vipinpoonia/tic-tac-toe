import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../constants/colors';
import BoardCell from './boardCell'

const Row = styled.div`
  background-color: ${COLORS.WHITE}
  display: flex;
  flex-direction: row;
`;

export default class BoardRow extends PureComponent {
  static propTypes = {
    colValues: PropTypes.array.isRequired,
    rowIndex: PropTypes.number.isRequired
  };

  renderRow() {
    const { colValues, rowIndex } = this.props;
    return colValues.map((val, index) => (
      <BoardCell rowIndex={rowIndex} colIndex={index} key={index}>
        {val}
      </BoardCell>
    ));
  }

  render() {
    return (
      <Row> 
        {this.renderRow()}
      </Row>
    );
  }
}
