"use client";

import React from "react";

type Props = { children: React.ReactNode };

type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Caught error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 rounded-xl">
          <h2 className="text-lg font-bold text-red-600">Component Error!</h2>
          <p className="text-sm">{this.state.error?.message}</p>
          <button
            onClick={this.handleReset}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md"
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
