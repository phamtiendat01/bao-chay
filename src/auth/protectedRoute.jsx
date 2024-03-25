import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../context/AuthProvider';
export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.username && !user?.password) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);
  return children;
}
