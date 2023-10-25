import StyledComponentsRegistry from './lib/registry';
import React from 'react';
import '@oict/standard-design-prague/dist/index.css';
import { StandardDesignProvider } from '@oict/standard-design-prague';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html>
		<body>
		<StandardDesignProvider>
			<StyledComponentsRegistry>
				{children}
			</StyledComponentsRegistry>
		</StandardDesignProvider>
		</body>
		</html>
	);
}
