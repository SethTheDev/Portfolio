"use client"

import React from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "./loading";

const Home = dynamic(
  () => import('./main'),
  {
    loading: () => <LoadingScreen />
  }
)

export default function Page() {
  return (
    <Home />
  )
}