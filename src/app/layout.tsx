import React from 'react';
import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head />
      <body suppressHydrationWarning>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
