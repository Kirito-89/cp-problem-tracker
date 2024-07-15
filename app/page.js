// pages/index.js

"use client"
import ProblemList from "./components/ProblemList";
import { useState, useEffect } from "react";

export default function Home() {
  const [problem, setproblem] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/codes');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Data fetched successfully:', data);
      setproblem(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <div className="min-h-screen absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
    {/* <div className=""> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProblemList problems={problem} />
      {/* </div> */}
    </div></div>
    </>
  );
}
