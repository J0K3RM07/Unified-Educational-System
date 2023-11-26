import { Routes, Route } from "react-router-dom";

import { RegistrationPage } from "./pages/RegistrationPage";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { PersonalAreaPage } from "./pages/PersonalAreaPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TeacherAreaPage } from "./pages/TeacherAreaPage";
import { AdminAreaPage } from "./pages/AdminAreaPage";
import { SchedulePage } from "./pages/SchedulePage";
import { MainPage } from "./pages/MainPage";
import { RatingPage } from "./pages/RatingPage";
import { EventPage } from "./pages/EventPage";
import { Homework } from "./components/screens/Homework/Homework";


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/reg" element={<RegistrationPage />} />
        <Route path="/personal-area" element={<PersonalAreaPage />} />
        <Route path="/teacher-area/:name" element={<TeacherAreaPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/admin-area/:name" element={<AdminAreaPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/homework" element={<Homework />} />


        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
