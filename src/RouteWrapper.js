
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const RouteWrapper = ({ children, delay = 20 }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  if (loading) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return children;
};

export default RouteWrapper;
