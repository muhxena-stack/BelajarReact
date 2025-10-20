import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>😢 Oops! Terjadi Kesalahan</h1>
          <p>Maaf, ada yang tidak beres dengan aplikasi.</p>
          <button 
            className="btn-primary"
            onClick={() => window.location.href = '/'}
          >
            Kembali ke Beranda
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;