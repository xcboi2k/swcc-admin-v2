'use client'

import React, { useState } from "react";
import Image from "next/image";

import Navbar from "@/components/landing-page/navbar/Navbar";
import Header from "@/components/landing-page/header/Header";
import RecentAdditions from "@/components/landing-page/recent-additions/RecentAdditions";
import AdminApplication from "@/components/landing-page/admin-application/AdminApplication";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <RecentAdditions />
      <AdminApplication />
    </>
  );
}
