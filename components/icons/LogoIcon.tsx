import React from 'react';
import { LOGO_URL } from '../../constants';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <img src={LOGO_URL} alt="This Is Us Logo" className={className} />
);
