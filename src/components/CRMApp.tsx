
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { getCurrentUser } from '../store/slices/authSlice';
import ProtectedRoute from './auth/ProtectedRoute';
import Layout from './layout/Layout';
import Dashboard from './dashboard/Dashboard';
import ProductList from './products/ProductList';

const CRMApp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'products'>('dashboard');

  useEffect(() => {
    if (isAuthenticated && token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuthenticated, token]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductList />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ProtectedRoute>
      <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderCurrentPage()}
      </Layout>
    </ProtectedRoute>
  );
};

export default CRMApp;
