import "./App.css";
import { Routes, Route } from "react-router-dom";

//Structure
import Sidebar from "./components/sidebar/Sidebar";

//Pages
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Communities from "./components/pages/Communities";
import Notifications from "./components/pages/Notifications";
import Bookmarks from "./components/pages/Bookmarks";
import Profile from "./components/pages/Profile";
import ExploreBar from "./components/ExploreBar/ExploreBar";
import Container from "./components/container/Container";

function App() {
	return (
		<Container>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="explore" element={<Explore />} />
				<Route path="communities" element={<Communities />} />
				<Route path="notifications" element={<Notifications />} />
				<Route path="bookmarks" element={<Bookmarks />} />
				<Route path="profile" element={<Profile />} />
				<Route path="explore" element={<Explore />} />
			</Routes>
			<ExploreBar />
		</Container>
	);
}

export default App;

