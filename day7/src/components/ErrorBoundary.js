import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasErr: false };

  static getDerivedStateFromError(error) {
    return {
      hasErr: true,
    };
  }

  render() {
    if (this.state.hasErr) {
      return (
        <h1>Something went wrong</h1>
      );
    }
    return this.props.children;
  }
}
