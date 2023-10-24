'use client';

import styled from 'styled-components';
import { TestContext } from '@/app/lib/test.context';

export default function Home() {
	return (
		<>
			<TestContext.Consumer>
				{value =>
					<>
						<StyledH1>{value}</StyledH1>
						<Paragraph>Tato stránka byla vykreslena na straně serveru i na straně klienta za pomoci CSS-in-JS knihovny Styled Components a direktivě 'use client'.</Paragraph>
					</>
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
