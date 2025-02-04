import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>OOPS! THAT'S NOT GOOD</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
