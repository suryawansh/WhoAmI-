import React, { useEffect, useState } from "react";

const GuessWhoAmI = () => {
  const DummyData = {
    id: 1,
    name: "Harry Kane",
    goals: 372,
    assists: 84,
    trophies: [
      {
        id: 1,
        name: "English Premier League",
        count: 3,
      },
      {
        id: 4,
        name: "Bundesliga",
        count: 2,
      },
    ],
    teammates: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Xavi"],
  };

  const [hints, setHints] = useState([]);
  const [assume, setAssumed] = useState("");
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const trophyNames = DummyData.trophies
      .map((trophy) => trophy.name)
      .join(", ");
    const hintData = [
      `Goals: ${DummyData.goals}`,
      `Assists: ${DummyData.assists}`,
      `Trophies: ${trophyNames}`,
      `Teammates: ${DummyData.teammates.join(", ")}`,
    ];

    setHints(hintData);
    setAssumed(DummyData.name);
  }, []);

  const handleGuess = () => {
    if (guess.trim().toLowerCase() === assume.toLowerCase()) {
      setResult("Correct! You guessed the player.");
    } else {
      setResult("Incorrect! Try again.");
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="h-[400px] bg-slate-100 border-black w-[50%] rounded-lg m-5 p-4">
          <h2>Assumed Player</h2>

          <p style={{ visibility: "hidden" }}>{assume}</p>
        </div>

        <div className="h-[400px] bg-slate-100 border-black w-[50%] rounded-lg m-5 p-4">
          <h2>Hints</h2>
          <ul>
            {hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex">
        <div className="h-[400px] bg-slate-100 border-black w-[50%] rounded-lg m-5 p-4">
          <h2>Player Response</h2>
          <input
            type="text"
            placeholder="Enter your guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={handleGuess}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>

        <div className="h-[500px] bg-slate-100 border-black w-[50%] rounded-lg m-5 p-4">
          <h2>Result</h2>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default GuessWhoAmI;
