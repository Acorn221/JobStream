import { FC, ReactNode } from 'react';

export const UIDashLayout: FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="w-full flex justify-center px-2">
    <div className="w-full py-8 mx-8 max-w-screen-xl">{children}</div>
  </div>
);
