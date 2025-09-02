// components/Layout.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx"; // Import du footer
import { Outlet } from "react-router-dom";

export default function Layout({ onLogout }) {
	return (
		<div className="layout">
			<Navbar onLogout={onLogout} />{" "}
			{/* Navbar avec bouton Déconnexion */}
			<main>
				<Outlet /> {/* Affiche Dashboard, User, ActivityPage */}
			</main>
			<Footer /> {/* Footer en bas de toutes les pages */}
		</div>
	);
}
