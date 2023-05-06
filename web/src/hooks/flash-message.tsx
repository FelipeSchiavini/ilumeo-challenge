import { useState } from 'react';
import { FlashMessageContainer } from '../components/atm.flash-message/flash-message.component.styled';

interface FlashMessage {
	message: string;
	type: 'success' | 'error' | 'warning';
}

export const useFlashMessage = () => {
	const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);

	const showSuccess = (message: string, timeDuration?: number) => {
		setFlashMessage({ message, type: 'success' });
		hideMessage(timeDuration);
	};

	const showError = (message: string, timeDuration?: number) => {
		setFlashMessage({ message, type: 'error' });
		hideMessage(timeDuration);
	};

	const showWarning = (message: string, timeDuration?: number) => {
		setFlashMessage({ message, type: 'warning' });
		hideMessage(timeDuration);
	};

	const hideMessage = (duration: number = 4000) => {
		setTimeout(() => {
			setFlashMessage(null);
		}, duration);
	};

	const FlashMessage: React.FunctionComponent = () => {
		return <>{flashMessage && <FlashMessageContainer type={flashMessage.type}>{flashMessage?.message}</FlashMessageContainer>}</>;
	};

	return { showSuccess, showError, showWarning, FlashMessage };
};
