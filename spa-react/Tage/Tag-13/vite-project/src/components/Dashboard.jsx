import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CenteredText from './CenteredText';

const Dashboard = () => {
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Wenn es die Dashboard ist, zeige die Überschrift an
    setShowHeader(location.pathname === '/dashboard');
  }, [location]);

  const handleLinkClick = () => {
    setShowHeader(false);
  };

  const handleDashboardClick = () => {
    setShowHeader(true);
  };

  return (
    <div>
      {showHeader && (
        <CenteredText>
          <h2>This is Dashboard</h2>
          <p>
            <Link to="profile" onClick={handleLinkClick}>Profile</Link>
          </p>
          <p>
            <Link to="settings" onClick={handleLinkClick}>Settings</Link>
          </p>
        </CenteredText>
      )}
      {!showHeader && (
        <CenteredText>
          <Link to="/dashboard" onClick={handleDashboardClick}>Back to Dashboard</Link>
          <Outlet />
        </CenteredText>
      )}
    </div>
  );
}

export default Dashboard;