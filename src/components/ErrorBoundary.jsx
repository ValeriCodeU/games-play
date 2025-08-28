import { Component } from "react";

export default class ErrorBoundary extends Component {
    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI.
        return { hasError: true };
    }

    constructor() {
        super();       
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log("ErrorBoundary caught an error:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}