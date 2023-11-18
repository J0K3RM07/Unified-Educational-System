import { Routes, Route } from "react-router-dom";

import { RegistrationPage } from "./pages/RegistrationPage";
import { AuthorizationPage } from "./pages/AuthorizationPage";

export function App() {
	return <>	
		<Routes>
			{/* <Route path="/" element={<MainPage />} /> */}
			<Route path="/auth" element={<AuthorizationPage />} />
			<Route path="/reg" element={<RegistrationPage />} />

			{/* <Route path="/schedule" element={<Schedule />} />
			<Route path="/rating" element={<RatingPage />} />
			<Route path="/events" element={<EventsPage />} />
			<Route path="/events/:id" element={<EventPage />} />
			<Route path="/courses" element={<CoursesPage />} />
			<Route path="/courses/:id" element={<Course />} />
			<Route path="/personal-area" element={<PersonalAreaPage/>} /> */}
			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Routes>
	</>
}