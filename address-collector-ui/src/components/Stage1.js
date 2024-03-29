import {
  default as React,
  Component, 
  PropTypes,
} from "react";

import {
  RaisedButton,
} from "material-ui";

const rowContainerStyle = {
  display: "flex",
  flexFlow: "column nowrap",
};

const rowStyle = {
  flex: "0 1 auto",
  alignSelf: "center",
};

export default class Stage1 extends Component {
 
//check for func 
  static propTypes = {
    onAddClicked: PropTypes.func.isRequired,
  } 
  render () {
    return (
      <div style = {rowContainerStyle}>
        <div style = {rowStyle}>
          <RaisedButton
            label="Add A New Device"
            primary={true}
            onClick={this.props.onAddClicked}
          />
        </div>
      </div>
    );
  }  
}
