import StyledComponentsRegistry from './lib/registry';
import React from 'react';
import { TestContext } from '@/app/lib/test.context';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
	return (
		<html>
		<body>
		<StyledComponentsRegistry>
			<TestContext.Provider value="some value">
				{children}
			</TestContext.Provider>
		</StyledComponentsRegistry>
		</body>
		</html>
	);
}
