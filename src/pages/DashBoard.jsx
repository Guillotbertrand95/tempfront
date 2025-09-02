import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.scss";
import PerformanceDashboard from "../components/PerformanceDashboard.jsx";

export default function Board() {
	const [activities, setActivities] = useState([]);
	const token = localStorage.getItem("token");
	const goals = { distance: 50, duration: 300, calories: 2500 };
	// Fonction pour récupérer les activités depuis le backend
	const fetchActivities = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_API_URL}/api/activities`,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			setActivities(
				res.data.sort((a, b) => new Date(a.date) - new Date(b.date))
			);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchActivities(); // fetch initial
	}, []);

	// Callback à passer au formulaire pour mettre à jour le dashboard
	const handleAddActivity = async (data) => {
		try {
			await axios.post(
				`${process.env.REACT_APP_API_URL}/api/activities`,
				data,
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			fetchActivities(); // rafraîchit automatiquement le dashboard
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="dashboard-page">
			<h2>Tableau de bord</h2>
			<PerformanceDashboard goals={goals} activities={activities} />
		</div>
	);
}
