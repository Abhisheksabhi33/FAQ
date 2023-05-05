import { Component } from "react";

import "./index.css";

class Toggle extends Component {
  state = { isOpen: false };

  onToggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };
  render() {
    const { children, className } = this.props;
    const { isOpen } = this.state;
    return (
      <button className={className} onClick={this.onToggle}>
        {children(isOpen)}
      </button>
    );
  }
}

export default Toggle;

