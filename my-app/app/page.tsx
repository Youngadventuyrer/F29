
"use client";

import { useEffect } from "react";
import { animate, onScroll } from "animejs";

export default function Page() {
    useEffect(() => {
      animate(".ello", {
        translateX: 50,
        autoplay: onScroll,
        opacity:[0,1],
        )
      }
          
)
    }, []);

    return (
        <div className="scroll-container h-screen overflow-y-auto">
            <section className="flex min-h-screen flex-col items-center justify-center gap-4">
                <h2 className="fade-up translate-y-4 text-3xl font-bold opacity-0">Why animate?</h2>
                <p className="fade-up translate-y-4 text-gray-600 opacity-0">Motion guides attention and improves clarity.</p>
            </section>

            <section className="flex min-h-screen flex-col items-center justify-center gap-4">
                <h2 className="slide-left -translate-x-6 text-3xl font-bold opacity-0">Basic animations</h2>
                <p className="slide-left -translate-x-6 text-gray-600 opacity-0">Opacity, scale, and position go a long way.</p>
            </section>

            <section className="flex min-h-screen flex-col items-center justify-center gap-4">
                <h2 className="fade-in text-3xl font-bold opacity-0">Timelines</h2>
                <p className="fade-in text-gray-600 opacity-0">Sequence multiple steps with control and flow.</p>
            </section>
        </div>
    );
}
