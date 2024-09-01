import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main style={{ paddingTop: '64px' }}>{children}</main>
    </>
  );
};

export default Layout;
