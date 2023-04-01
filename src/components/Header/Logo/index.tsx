import React from 'react';
import { Link } from 'react-router-dom';

export interface LogoProps {
	title?: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {
	return (
		<Link to="/" className="flex h-full items-center">
			<p className="select-none text-3xl font-bold text-light-text-1 dark:text-dark-text-1">
				{title ?? 'beomlog'}
			</p>
		</Link>
	);
};

export default Logo;
