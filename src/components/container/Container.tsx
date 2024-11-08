import React, { ReactNode } from 'react';

interface IContainer {
    className?: string;
    children: ReactNode;
}

const Container: React.FC<IContainer> = ({ className = '', children }) => {
    return (
        <div className={`w-full max-w-[1440px] mx-auto  ${className}`}>
            {children}
        </div>
    );
};

export default Container;
