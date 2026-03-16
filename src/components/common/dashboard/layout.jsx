import Shell from './Shell';

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Shell>{children}</Shell>
      </ProtectedRoute>
    </AuthProvider>
  );
}
