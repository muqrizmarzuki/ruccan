"use client";

import LoadingScreen from "@/components/layout/LoadingScreen";
import React from "react";

const MainPage: React.FC = () => {

  React.useEffect(() => {
    window.location.href = "/guest/login"
  }, [])


  return <LoadingScreen />;
};

export default MainPage;
