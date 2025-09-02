// components/Footer.jsx
import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<p>© 2025 Bertrand – Tableau de bord sportif</p>
				<div className="footer-links">
					<a
						href="https://github.com/tonprofil"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/tonprofil"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					<a href="mailto:tonemail@example.com">Contact</a>
				</div>
			</div>
		</footer>
	);
}
