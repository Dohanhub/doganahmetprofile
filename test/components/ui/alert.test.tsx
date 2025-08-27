import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { Alert, AlertDescription, AlertTitle } from '../../../client/src/components/ui/alert';
import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';

describe('Alert Component', () => {
  it('should render alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert description text</AlertDescription>
      </Alert>
    );

    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert description text')).toBeInTheDocument();
  });

  it('should render alert with only title', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title Only</AlertTitle>
      </Alert>
    );

    expect(screen.getByText('Alert Title Only')).toBeInTheDocument();
  });

  it('should render alert with only description', () => {
    render(
      <Alert>
        <AlertDescription>Alert description only</AlertDescription>
      </Alert>
    );

    expect(screen.getByText('Alert description only')).toBeInTheDocument();
  });

  it('should apply default variant styles', () => {
    render(
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>Default variant</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('border');
  });

  it('should apply destructive variant styles', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>Destructive variant</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('border-destructive');
  });

  it('should apply custom className', () => {
    render(
      <Alert className="custom-alert">
        <AlertTitle>Custom Alert</AlertTitle>
        <AlertDescription>Custom class</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('custom-alert');
  });

  it('should render with icon', () => {
    render(
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Icon Alert</AlertTitle>
        <AlertDescription>With icon</AlertDescription>
      </Alert>
    );

    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  it('should handle different icon types', () => {
    const { rerender } = render(
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Circle Icon</AlertTitle>
      </Alert>
    );

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();

    rerender(
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Triangle Icon</AlertTitle>
      </Alert>
    );

    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });

  it('should render without icon', () => {
    render(
      <Alert>
        <AlertTitle>No Icon Alert</AlertTitle>
        <AlertDescription>No icon present</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(screen.queryByRole('img', { hidden: true })).not.toBeInTheDocument();
  });

  it('should handle empty content', () => {
    render(<Alert />);
    
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
