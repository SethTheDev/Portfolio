"use client"

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "./loading";
import { animate } from "motion";

const Home = dynamic(
  () => import('./pages/main'),
  {
    ssr: false,
  }
)

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      animate('.loading', {
        opacity: 0
      }, {
        duration: 0.25
      }).finished.then(() => {
        setIsLoading(false);
      })
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Home />
    </React.Suspense>
  )
}