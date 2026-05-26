
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Navbar from './components/common/Navbar';
import { lazy, Suspense } from 'react';

// Layouts
import JobSeekerLayout from './components/jobseeker/JobSeekerLayout';
import ManagerLayout from './components/manager/ManagerLayout';
import AdminLayout from './components/admin/AdminLayout';

// Lazy pages
const Home           = lazy(() => import('./pages/Home'));
const Login          = lazy(() => import('./pages/Login'));
const Register       = lazy(() => import('./pages/Register'));
const BrowseJobs     = lazy(() => import('./pages/jobseeker/BrowseJobs'));
const MyApplications = lazy(() => import('./pages/jobseeker/MyApplications'));
const MyProfile      = lazy(() => import('./pages/jobseeker/MyProfile'));

const CompanyProfile = lazy(() => import('./pages/manager/CompanyProfile'));
const ManageJobs     = lazy(() => import('./pages/manager/ManageJobs'));
const Applicants     = lazy(() => import('./pages/manager/Applicants'));

const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

const PageLoader = () => (
  <div className="page-loader">
    <div className="spinner"></div>
    <span>Loading...</span>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Navbar />

        <Suspense fallback={<PageLoader />}>

          <Routes>

            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<BrowseJobs />} />

            {/* Jobseeker */}
            <Route
              path="/jobseeker"
              element={
                <ProtectedRoute role="JOBSEEKER">
                  <JobSeekerLayout />
                </ProtectedRoute>
              }
            >
              <Route path="browse" element={<BrowseJobs />} />
              <Route path="applications" element={<MyApplications />} />
              <Route path="profile" element={<MyProfile />} />
              <Route index element={<Navigate to="browse" replace />} />
            </Route>

            {/* Manager */}
            <Route
              path="/manager"
              element={
                <ProtectedRoute role="MANAGER">
                  <ManagerLayout />
                </ProtectedRoute>
              }
            >
              <Route path="company" element={<CompanyProfile />} />
              <Route path="jobs" element={<ManageJobs />} />
              <Route path="applicants" element={<Applicants />} />
              <Route index element={<Navigate to="jobs" replace />} />
            </Route>

            {/* Admin */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="ADMIN">
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>

        </Suspense>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
