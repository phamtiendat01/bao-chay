import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
export default function ProtectedRoute({ children }) {
  const [user] = useAuth();
  console.log(user)
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);
  return children;
}
