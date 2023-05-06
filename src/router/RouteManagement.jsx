import { Suspense } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import LayoutComponent from "../components/layout/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import Course from "../pages/course/Course";
import OfflineClass from "../pages/OfflineClass";

const RouteManagement = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/course" element={<Course />} />
          <Route path="/offlineClass" element={<OfflineClass />} />
        </Routes>
      </LayoutComponent>
    </Suspense>
  );
};

export default RouteManagement;
