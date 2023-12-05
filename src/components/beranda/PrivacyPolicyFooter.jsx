// PrivacyPolicyFooter.js
import React from 'react';

const PrivacyPolicyFooter = () => {
  return (
    <footer className="bg-white p-4 text-center text-xs text-gray-500 border-t">
      <a href="/privacy" className="hover:underline">Privacy</a> · 
      <a href="/terms" className="hover:underline">Terms</a> · 
      <a href="/advertising" className="hover:underline">Advertising</a> · 
      <a href="/cookies" className="hover:underline">Cookies</a>
      <p>Contact us: info@example.com</p>
    </footer>
  );
};

export default PrivacyPolicyFooter;
