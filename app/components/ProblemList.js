"use client"
import React, { useState, useEffect } from 'react';

const ProblemList = ({ problems }) => {
  const [groupedProblems, setGroupedProblems] = useState({});

  useEffect(() => {
    //calling the function to group the data by difficulty whenever problems state is updated
    groupDataByDifficulty();
  }, [problems]);
  const groupDataByDifficulty = () => {
    const grouped = problems.reduce((groups, item) => {
      const difficulty = item.difficulty;
      if (!groups[difficulty]) {
        groups[difficulty] = [];
      }
      groups[difficulty].push(item);
      return groups;
    }, {});
    setGroupedProblems(grouped);
  };

  return (
    <div className="space-y-8">
      {Object.keys(groupedProblems).map((difficulty, index) => (
        <div key={index} className="bg-purple-300 shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{difficulty} Problems</h2>
            <ul className="mt-2">
              {groupedProblems[difficulty].map((problem, idx) => (
                <li key={idx} className="text-gray-700">
                  <a href={problem.link} className="text-blue-500 hover:underline">{problem.link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemList;
