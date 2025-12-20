import React from 'react';
import { Navigate } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PrivateRoute({ children }) {
  return TokenService.hasAuthToken() ? children : <Navigate to="/login" replace />;
}