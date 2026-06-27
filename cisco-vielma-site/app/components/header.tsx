import Link from 'next/link';

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-brand">Cisco Vielma</div>

        <div className="nav-actions">
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/photos">Photos</Link>
          </div>

          <div className="nav-social">
            <a
              href="https://github.com/ciscovielma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.49 11.49 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.372.815 1.102.815 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.697.825.578C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/cisco-vielma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.555V14.75c0-1.357-.027-3.104-1.893-3.104-1.895 0-2.185 1.48-2.185 3.01v5.795H9.378V9h3.414v1.56h.047c.476-.902 1.637-1.852 3.37-1.852 3.602 0 4.267 2.372 4.267 5.456v6.286zM5.337 7.433c-1.145 0-2.073-.93-2.073-2.073 0-1.144.928-2.072 2.073-2.072 1.145 0 2.073.928 2.073 2.072 0 1.143-.928 2.073-2.073 2.073zm1.777 13.017H3.56V9h3.554v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.728C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
