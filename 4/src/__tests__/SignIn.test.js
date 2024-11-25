import {
	render, screen, waitFor, fireEvent
} from '@testing-library/react-native';
import SignInForm from '../components/Login/SignInForm';

describe('SignIn', () => {
	describe('SignInForm', () => {
		it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
			// render the SignInContainer component, fill the text inputs and press the submit button

			const onSubmit = jest.fn();

			render(<SignInForm onSubmit={onSubmit} />)

			fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
			fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');

			fireEvent.press(screen.getByText('Sign in'));

			await waitFor(() => {
				// expect the onSubmit function to have been called once and with a correct first argument
				expect(onSubmit).toHaveBeenCalledTimes(1);
				//console.log(onSubmit.mock.calls);


				expect(onSubmit.mock.calls[0][0]).toEqual({
					username: 'kalle',
					password: 'password',
				});
			});
		});
	});
});