import React from 'react';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  // Additional logic or components can be added here
  return <Component {...pageProps} />;
}

export default MyApp;
