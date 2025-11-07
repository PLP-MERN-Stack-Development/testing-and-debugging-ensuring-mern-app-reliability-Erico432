import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../components/LoginForm';
import axios from 'axios';
jest.mock('axios');

test('submits login', async () => {
  axios.post.mockResolvedValue({ data: { token: 'abc' } });
  render(<LoginForm />);
  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'a@b.c' } });
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: '123' } });
  fireEvent.click(screen.getByText(/login/i));
  expect(axios.post).toHaveBeenCalledWith('/api/auth/login', { email: 'a@b.c', password: '123' });
});
