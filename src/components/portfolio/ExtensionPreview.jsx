import React from 'react';
import { FaChrome } from 'react-icons/fa';
import './ExtensionPreview.css';

export default function ExtensionPreview({ image }) {
  return (
    <div className="extension-preview">
      <div className="extension-preview-heading">
        <span>Smodin <span>for Chrome</span></span>
        <span className="extension-store-badge"><FaChrome aria-hidden="true" /> Chrome Web Store</span>
      </div>
      <img
        className="extension-promo"
        src={image}
        alt="Smodin Chrome extension: selected text and inline AI detection results, as shown in its Chrome Web Store preview"
        loading="lazy"
        width="1000"
        height="625"
      />
    </div>
  );
}
