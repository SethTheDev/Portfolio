"use client"

import React, { useState, useEffect, lazy } from "react";
import LoadingScreen from "./loading";
import "./styles.css";

const Home = lazy(
  () => import('./main')
)

export default function Page() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Home />
    </React.Suspense>
  )
}
