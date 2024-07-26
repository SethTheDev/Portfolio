"use client"

import React, { useState, useEffect, lazy } from "react";
import LoadingScreen from "./loading";

const Home = lazy(
  () => import('./pages/main')
)

export default function Page() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Home />
    </React.Suspense>
  )
}