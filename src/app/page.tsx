"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Reason {
  _id: string;
  reason: string;
}

export default function Home() {
  const [reasons, setReasons] = useState<Reason[]>([]);

  useEffect(() => {
    axios.get("/api/reasons").then((response) => {
      setReasons(response.data.reasons);
    });
  }, []);

  return (
    <div className="flex h-screen bg-neutral-900">
      <div className="m-auto">
        <div className="text-6xl font-bold mb-4 leading-header">
          <div className="animate-fade-down animate-once animate-duration-[3000ms] animate-ease-out">
            Reasons why you{" "}
          </div>
          <div className="animate-fade-down animate-once animate-duration-[3000ms] animate-delay-[500ms] animate-ease-out">
            should hire <span className="text-teal-500">Joe</span>
          </div>
        </div>
        <div className="space-y-1 animate-fade-up animate-once animate-duration-[3000ms] animate-delay-[1000ms] animate-ease-out">
          {reasons.map((reason) => (
            <div
              key={reason.reason}
              className="flex text-3xl font-semibold text-neutral-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-8 mr-2 fill-teal-700 border-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              {reason.reason}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
