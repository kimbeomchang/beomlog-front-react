import React from 'react';

import { ReactComponent as SignInIcon } from '@assets/icons/signIn.svg';

export const SignButton: React.FC = () => {
	return <SignInIcon className="h-10 w-10 fill-dark-bg-element-1 dark:fill-light-bg-element-1" />;
};
