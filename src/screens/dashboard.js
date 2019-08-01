import React, { PureComponent } from 'react';
import Board from '../comps/board'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  Container, 
  Row, 
  Text, 
  TextInput,
  Card,
  Col
} from '../comps'

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
    // initialize default board
    this.props.updateRowCount(3)
    this.props.updateStreakCount(3);
    this.props.updateColCount(3)
  }

  handleOnRowChange = (event) => {
    console.log(event)
    var newVal = (
      event.target.validity.valid ? event.target.value : this.props.row);
    if (newVal===""){
      newVal = 0
    }
    console.log(event)
    newVal = Math.min(parseInt(newVal, 10), 10)
    this.props.updateRowCount(newVal);
  }

  handleOnColumnChange = (event) => {
    var newVal = (
      event.target.validity.valid ? event.target.value : this.props.column);
    if (newVal===""){
      newVal = 0
    }
    newVal = Math.min(parseInt(newVal, 10), 10)
    this.props.updateColCount(newVal)
  }

  handleOnStreakChange = (event) => {
    var newVal = (
      event.target.validity.valid ? event.target.value : this.props.streak);
    if (newVal===""){
      newVal = 0
    }
    newVal = Math.min(parseInt(newVal, 10), 10)
    this.props.updateStreakCount(newVal)
  }

  render() {
    const { column, row, streak } = this.props;
    return (
      <Container>
        <Card secondary gap={10}>
          <Row gutter>
            <Col>
              <Text size="medium">Enter row Count:</Text>
            </Col>
            <Col auto>
              <TextInput
                pattern="[0-9]*" 
                name="row-count"
                type="text"
                placeholder="Enter row count"
                onInput={this.handleOnRowChange}
                value={row === 0 ? "" : row.toString()}
                width={200}
              />
            </Col>
          </Row>
          <Row gutter gap>
            <Col>
              <Text size="medium">Enter colum Count:</Text>
            </Col>
            <Col auto>
              <TextInput
                pattern="[0-9]*" 
                name="column-count"
                type="text"
                placeholder="Enter column count"
                onInput={this.handleOnColumnChange}
                value={column === 0 ? "" : column.toString()}
                width={200}
              />
            </Col>
          </Row>
          <Row gutter>
            <Col>
              <Text size="medium">Enter Streak Count:</Text>
            </Col>
            <Col auto>
              <TextInput
                pattern="[0-9]*" 
                name="streak-count"
                type="text"
                placeholder="Enter streak count"
                onInput={this.handleOnStreakChange}
                value={streak === 0 ? "" : streak.toString()}
                width={200}
              />
            </Col>
          </Row>
          <Board />
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({ initializeGame }) => ({
  initializing: initializeGame.initializing,
  row: initializeGame.row,
  column: initializeGame.column,
  streak: initializeGame.streak,
  error: initializeGame.error,
});

const actioncreators = {
  updateRowCount,
  updateColCount, 
  updateStreakCount
};

export default connect(mapStateToProps, actioncreators)(Dashboard);