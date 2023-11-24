import { Routes, Route } from "react-router-dom";

import { RegistrationPage } from "./pages/RegistrationPage";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { PersonalAreaPage } from "./pages/PersonalAreaPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TeacherAreaPage } from "./pages/TeacherAreaPage";
import { AdminAreaPage } from "./pages/AdminAreaPage";

export function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
        <Route path='/auth' element={<AuthorizationPage />} />
        <Route path='/reg' element={<RegistrationPage />} />
        <Route path='/personal-area' element={<PersonalAreaPage />} />
        <Route path='/error' element={<NotFoundPage />} />
        <Route path='/teacher-area/:name' element={<TeacherAreaPage />} />
        <Route path='/admin-area/:name' element={<AdminAreaPage />} />
        {/* <Route path="/schedule" element={<Schedule />} />
			<Route path="/rating" element={<RatingPage />} />
			<Route path="/events" element={<EventsPage />} />
			<Route path="/events/:id" element={<EventPage />} />
			<Route path="/courses" element={<CoursesPage />} />
			<Route path="/courses/:id" element={<Course />} />
			<Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
}
