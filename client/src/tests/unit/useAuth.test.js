import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/useAuth';

test('login sets token', () => {
  const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
  const { result } = renderHook(() => useAuth(), { wrapper });
  act(() => result.current.login('fakejwt'));
  expect(result.current.token).toBe('fakejwt');
});
