import React, { Suspense } from "react";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import { Routes, Route } from "react-router-dom";
import LayoutComponent from "../components/layout/LayoutComponent";
import HomePage from "../pages/homePage/HomePage";
import Course from "../pages/course/Course";

const RouteManagement = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LayoutComponent>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </LayoutComponent>
    </Suspense>
  );
};

export default RouteManagement;
