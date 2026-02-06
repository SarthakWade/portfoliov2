"use client";
import React from "react";

type Props = { children: React.ReactNode };

export class SimpleErrorBoundary extends React.Component<
  Props,
  { hasError: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("ErrorBoundary caught an error", error, info);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center text-sm text-neutral-500 py-6">
          Something went wrong rendering this section.
        </div>
      );
    }
    return this.props.children;
  }
}
