'use client'

import React, { useState } from "react";
import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";


export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}
