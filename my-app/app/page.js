"use client";

import { useEffect } from "react";
import { animate } from "animejs";

export default function Page() {
   useEffect(() => {
       // Anime.js code goes here
       animate(".square", {
    scale: 2
});
   }, []);

   return (
       // HTML goes here
       <div className="flex h-screen w-screen items-center justify-center">
     <div className="h-16 w-16 bg-blue-500 square"></div>
</div>

   );
}

