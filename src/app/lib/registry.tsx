'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { TestContext } from '@/app/lib/test.context';

export default function StyledComponentsRegistry({ children, }: { children: React.ReactNode }) {
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles} </>;
	});

	if (typeof window !== 'undefined') return <>{children} </>;

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<TestContext.Provider value="some value">
				{children}
			</TestContext.Provider>
		</StyleSheetManager>
	);
}
