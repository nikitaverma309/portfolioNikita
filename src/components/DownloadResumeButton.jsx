import React from 'react';

const DownloadResumeButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '12px 20px',
    borderRadius: '30px',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
  };

  const hoverStyle = {
    backgroundColor: '#52e0c4',
  };

  const [hover, setHover] = React.useState(false);

  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'download_portfolio', {
        event_category: 'engagement',
        event_label: 'Download Resume Button',
      });
    }
  };

  return (
    <a
      href="https://bit.ly/chiragsahu-resume"
      target="_blank"
      rel="noopener noreferrer"
      style={hover ? {...buttonStyle, ...hoverStyle} : buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      Download Resume
    </a>
  );
};

export default DownloadResumeButton;
