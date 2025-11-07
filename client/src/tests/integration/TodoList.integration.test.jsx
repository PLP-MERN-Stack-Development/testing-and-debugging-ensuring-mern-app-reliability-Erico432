import { render, screen, waitFor } from '@testing-library/react';
import TodoList from '../../components/TodoList';
import axios from 'axios';
import { AuthProvider } from '../../hooks/useAuth';
jest.mock('axios');

const wrapper = ({ children }) => (
  <AuthProvider>
    <div>{children}</div>
  </AuthProvider>
);

test('fetches and shows todos', async () => {
  axios.get.mockResolvedValue({ data: [{ _id: '1', text: 'Buy milk' }] });
  render(<TodoList />, { wrapper });
  await waitFor(() => expect(screen.getByText('Buy milk')).toBeInTheDocument());
});
