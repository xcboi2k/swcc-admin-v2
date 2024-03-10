'use client'
import DefaultNavBar from "@/components/DefaultNavBar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="m-0 p-0">
      <div className="bg-#1a1717">

      </div>
      <DefaultNavBar menuButtonOnClick={() => setOpenMenu(!openMenu)}/>
    </div>
  );
}
