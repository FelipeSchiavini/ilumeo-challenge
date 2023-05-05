import { Body } from '../atm.typography/typography.component.styled';
import { HeaderStyled, UserIdentifierWapperStyled } from './header.component.styled';

interface HeaderProps {
	userId: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ userId }) => {
	return (
		<HeaderStyled>
			<Body toBold>Relógio de ponto</Body>
			<UserIdentifierWapperStyled>
				<Body toBold toUpperCase>
					{`#${userId}`}
				</Body>
				<Body>Usuário</Body>
			</UserIdentifierWapperStyled>
		</HeaderStyled>
	);
};
