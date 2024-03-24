'use client'

import React, { useState } from "react";
import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import RecentAdditions from "@/components/recent-additions/RecentAdditions";
import AdminApplication from "@/components/admin-application/AdminApplication";


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
