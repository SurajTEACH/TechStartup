import { useState } from 'react';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '917049776747'; // +91 7049776747
const WHATSAPP_MESSAGE = 'Hello! I would like to get in touch with you.';

const WhatsAppButton = () => {
  const [tooltip, setTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="whatsapp-fab-wrapper">
      {/* Tooltip */}
      {tooltip && (
        <div className="whatsapp-tooltip">
          Chat with us on WhatsApp!
        </div>
      )}

      {/* Pulse Rings */}
      <span className="whatsapp-pulse ring1" />
      <span className="whatsapp-pulse ring2" />

      {/* Main Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30"
          height="30"
          fill="white"
        >
          <path d="M4.868 43.303l2.694-9.835a18.914 18.914 0 01-2.532-9.489C5.034 13.514 13.548 5 24.014 5a18.874 18.874 0 0113.433 5.568 18.875 18.875 0 015.568 13.427c-.004 10.465-8.518 18.978-18.983 18.978a18.945 18.945 0 01-9.062-2.308L4.868 43.303z" />
          <path
            fill="#25D366"
            d="M4.868 43.303l2.694-9.835a18.914 18.914 0 01-2.532-9.489C5.034 13.514 13.548 5 24.014 5a18.874 18.874 0 0113.433 5.568 18.875 18.875 0 015.568 13.427c-.004 10.465-8.518 18.978-18.983 18.978a18.945 18.945 0 01-9.062-2.308L4.868 43.303z"
          />
          <path
            fill="white"
            fillRule="evenodd"
            d="M19.268 16.042c-.355-.79-.729-.806-1.067-.82-.276-.013-.592-.012-.908-.012s-.829.124-1.264.619c-.434.495-1.659 1.619-1.659 3.949s1.699 4.58 1.936 4.896c.237.316 3.269 5.192 8.024 7.073 3.972 1.568 4.78 1.255 5.643 1.177.862-.079 2.776-1.135 3.168-2.23.392-1.096.392-2.034.275-2.23-.118-.197-.434-.315-.908-.552s-2.804-1.383-3.239-1.54c-.434-.158-.75-.237-1.066.237-.316.475-1.224 1.54-1.499 1.856-.276.316-.552.355-1.026.119-.474-.237-1.997-.737-3.804-2.35-1.407-1.256-2.358-2.807-2.633-3.282-.276-.475-.03-.732.206-.968.211-.21.474-.552.711-.828.237-.276.316-.475.474-.79.158-.315.079-.593-.04-.829-.118-.237-1.042-2.576-1.46-3.52z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
