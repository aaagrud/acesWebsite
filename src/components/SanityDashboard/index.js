import React from 'react';

const SanityDashboard = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe
        src="https://your-sanity-project-url.sanity.studio/desk"
        title="Sanity Dashboard"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default SanityDashboard;
