import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const bin =
  "01001000  01100101  01101100  01101100  01101111  00100000  01010111  01101111  01110010  01101100  01100100  ";
const binaryStr = bin.repeat(6);

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <>
      <style>{`
        .footer-grid {
          position: relative;
          zIndex: 10;
          max-width: 1240px;
          margin: 0 auto;
          padding: 28px 16px 0 16px;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 12px;
        }
        .footer-col-1 { grid-column: span 3; }
        .footer-col-2 { grid-column: span 4; }
        .footer-col-3 { grid-column: span 2; }
        .footer-col-4 { grid-column: span 3; }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          .footer-col-1 { grid-column: span 2; }
          .footer-col-2 { grid-column: span 2; }
          .footer-col-3 { grid-column: span 1; }
          .footer-col-4 { grid-column: span 1; }
        }

        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 20px 14px 0 14px !important;
          }
          .footer-col-1,
          .footer-col-2,
          .footer-col-3,
          .footer-col-4 {
            grid-column: span 1 !important;
          }
          .footer-logo {
            width: 180px !important;
          }
          .footer-map {
            height: 160px !important;
          }
          .footer-copyright-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 6px !important;
          }
        }
      `}</style>

      <footer
        style={{
          background: "var(--footer-bg)",
          color: "var(--text-primary)",
          borderTop: "2.5px solid #2563eb",
          borderBottom: "2.5px solid #2563eb",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        {/* ── Top Binary Ticker ── */}
        <div
          style={{
            height: 24,
            background: "linear-gradient(90deg,#1e3a8a,#2563eb,#1e3a8a)",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="binary-scroll-fwd"
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "#93c5fd",
              letterSpacing: "2px",
              paddingLeft: 8,
            }}
          >
            {binaryStr}
          </span>
        </div>

        {/* ── Rotating Ring (center bg) ── */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 380,
            height: 380,
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.06,
          }}
        >
          <svg
            className="animate-spin-slow"
            style={{ width: "100%", height: "100%", display: "block" }}
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="200" cy="200" r="185" stroke="#16a34a" strokeWidth="8" strokeDasharray="60 20" />
            <circle cx="200" cy="200" r="145" stroke="#16a34a" strokeWidth="4" strokeDasharray="30 15" />
            <circle cx="200" cy="200" r="105" stroke="#16a34a" strokeWidth="6" strokeDasharray="80 10" />
            <circle cx="200" cy="200" r="65"  stroke="#16a34a" strokeWidth="3" strokeDasharray="20 12" />
          </svg>
        </div>

        {/* ── Floating code chars ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {[
            { char: "{",  top: "18%", left: "3%",   size: 52 },
            { char: "}",  top: "50%", right: "3%",  size: 52 },
            { char: "<",  bottom: "28%", left: "28%", size: 40 },
            { char: "/>", top: "22%", right: "25%", size: 40 },
          ].map(({ char, size, ...pos }, i) => (
            <span
              key={i}
              className={`animate-float-${i + 1}`}
              style={{
                position: "absolute",
                fontFamily: "monospace",
                fontWeight: 900,
                color: "#2563eb",
                opacity: 0.05,
                fontSize: size,
                userSelect: "none",
                ...pos,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* ── Main Grid ── */}
        <div className="footer-grid">
          {/* Col 1 — Logo + Address I */}
          <div className="footer-col-1">
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                padding: 0,
                borderRadius: 0,
                marginBottom: 14,
                textDecoration: "none",
              }}
            >
              <img
                className="footer-logo"
                src={isDark ? "/logoCompnay.png" : "/logolight.jpeg"}
                alt="CodeSetu Logo"
                style={{ width: 220, height: "auto", objectFit: "contain", display: "block" }}
              />
            </a>

            <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 14 }}>
              We provide end-to-end IT solutions including custom software, web &amp; mobile apps, and
              cloud solutions to help your business thrive.
            </p>

            <FHead>Address I</FHead>
            <CItem icon={<LocIcon />} value="First Floor, Tamara Uprise Rahatani, Pune, 411017" />
            <CItem icon={<PhoneIcon />} label="PHONE" value="+91 7049776747" href="tel:+917049776747" />
            <CItem icon={<MailIcon />} label="EMAIL" value="kamleshshah1822@gmail.com" href="mailto:kamleshshah1822@gmail.com" />
          </div>

          {/* Col 2 — Address II + Map */}
          <div className="footer-col-2">
            <FHead>Address II</FHead>
            <CItem icon={<PhoneIcon />} label="MOBILE" value="+91 7049776747" href="tel:+917049776747" />
            <CItem icon={<LocIcon />} value="First Floor, Tamara Uprise Rahatani, Pune, 41101" />

            <div style={{ marginTop: 12 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg style={{ width: 14, height: 14, stroke: "#3b82f6", flexShrink: 0 }} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Location Map
              </p>
              <div
                className="footer-map"
                style={{ width: "100%", height: 180, borderRadius: 10, overflow: "hidden", border: "1px solid var(--border-color)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.7833508!3d18.6055632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b92079f4046d%3A0xff65689f48a7dbd3!2sTamara%20Uprise!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  style={{ border: 0 }}
                />
              </div>
              <a
                href="https://www.google.com/maps/place/Tamara+Uprise/@18.6055632,73.7833508,418m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bc2b92079f4046d:0xff65689f48a7dbd3!2sTamara+Uprise!8m2!3d18.605513!4d73.7846814!16s%2Fg%2F11shdb4srv"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 6,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#3b82f6",
                  textDecoration: "none",
                }}
              >
                View on Google Maps
                <svg style={{ width: 13, height: 13, stroke: "#3b82f6" }} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3 — Quick Links + Our Services */}
          <div className="footer-col-3">
            <FHead>Quick Links</FHead>
            <FLinks
              items={[
                { name: "Blog",     to: "/blog" },
                { name: "About",    to: "/about" },
                { name: "Services", to: "/support" },
                { name: "Contact",  to: "/support" },
                { name: "Careers",  to: "/careers" },
              ]}
            />
            <FHead style={{ marginTop: 20 }}>Our Services</FHead>
            <FLinks
              items={[
                { name: "Web Development", to: "/support" },
                { name: "Mobile Apps",     to: "/support" },
                { name: "Cloud Solutions", to: "/support" },
                { name: "IT Consulting",   to: "/support" },
              ]}
            />
          </div>

          {/* Col 4 — Support + Social Media */}
          <div className="footer-col-4">
            <FHead>Support</FHead>
            <FLinks
              items={[
                { name: "Support Center",    to: "/support" },
                { name: "Terms & Conditions",to: "/terms" },
                { name: "Refund Policy",     to: "/refund" },
                { name: "Privacy Policy",    to: "/privacy" },
              ]}
            />
            
            {/* Social Media Section */}
            <FHead style={{ marginTop: 20 }}>Follow Us</FHead>
            <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/developer_kamlesh/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text-secondary)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E4405F";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://m.facebook.com/kamlesh.shah.723370/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text-secondary)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1877F2";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kamleshshah1822/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--text-secondary)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0A66C2";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Copyright Bar ── */}
        <div
          className="footer-copyright-bar"
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: 1240,
            margin: "20px auto 0",
            padding: "12px 16px",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
          }}
        >
          <p style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }}>
            © 2026&nbsp;
            <strong style={{ color: "var(--text-primary)", fontWeight: 800 }}>
              CodeSetu Technologies Pvt. Ltd.
            </strong>
            .&nbsp;All Rights Reserved.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 12,
              color: "var(--text-muted)",
              fontWeight: 600,
            }}
          >
            <span>Made with</span>
            <span style={{ color: "#ef4444", animation: "pulse 1.5s ease-in-out infinite" }}>♥</span>
            <span>in India</span>
          </div>
        </div>
      </footer>
    </>
  );
};

/* ─── Helper Components ─── */

const FHead = ({ children, style = {} }) => (
  <h3
    style={{
      fontSize: 14,
      fontWeight: 800,
      color: "var(--text-primary)",
      borderBottom: "1px solid var(--border-color)",
      paddingBottom: 7,
      marginBottom: 10,
      ...style,
    }}
  >
    {children}
  </h3>
);

const FLinks = ({ items }) => (
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
    {items.map((it) => (
      <li key={it.name} style={{ marginBottom: 8 }}>
        <Link
          to={it.to}
          style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          {it.name}
        </Link>
      </li>
    ))}
  </ul>
);

const CItem = ({ icon, label, value, href }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
    <div
      style={{
        width: 28, height: 28, borderRadius: 7,
        background: "rgba(79,110,247,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: 2,
      }}
    >
      {icon}
    </div>
    <div>
      {label && (
        <span style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)", marginBottom: 2 }}>
          {label}
        </span>
      )}
      {href ? (
        <a
          href={href}
          style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          {value}
        </a>
      ) : (
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)" }}>{value}</span>
      )}
    </div>
  </div>
);

const LocIcon = () => (
  <svg style={{ width: 14, height: 14, stroke: "#3b82f6" }} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg style={{ width: 14, height: 14, stroke: "#22c55e" }} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg style={{ width: 14, height: 14, stroke: "#a855f7" }} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default Footer;