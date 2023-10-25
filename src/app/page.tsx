'use client';

import styled from 'styled-components';
import { TestContext } from '@/app/lib/test.context';
import { Card, StandardDesignContextType } from '@oict/standard-design-prague';

export default function Home() {
	return (
		<>
			<TestContext.Consumer>
				{value =>
					<Card>
						<StyledH1>{value}</StyledH1>
						<Paragraph>Tato stránka byla vykreslena na straně serveru i na straně klienta za pomoci CSS-in-JS knihovny Styled Components a direktivě 'use client'.</Paragraph>
					</Card>
				}
			</TestContext.Consumer>
		</>
	);
}

const StyledH1 = styled.h1`
	color: darkviolet;
	font-family: sans-serif;
	font-size: 72px;
`;

const Paragraph = styled.p`
	font-family: sans-serif;
`;
