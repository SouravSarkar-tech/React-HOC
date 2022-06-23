import React from "react";

const withToggler = HocComponent => {
  return class WithToggler extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        toggleStatus: "false"
      };
    }

    toggle = () => {
      this.setState({
        toggleStatus: !this.state.toggleStatus
      });
    };
    render() {
      return (
        <HocComponent
          {...this.props}
          toggle={this.toggle}
          toggleStatus={this.state.toggleStatus}
        />
      );
    }
  };
};

export default withToggler;
