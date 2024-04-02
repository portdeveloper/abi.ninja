import { useState } from "react";
import { detectProxyTarget } from "../utils/proxyContracts";
import { testCases } from "../utils/testCases";

export const NewCodeViem = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  const runTests = async () => {
    setIsLoading(true);
    const startTime = performance.now();

    const newResults = [];

    for (const testCase of testCases) {
      try {
        const result = await detectProxyTarget(testCase.address);

        const passed = result === testCase.expected;
        newResults.push({ ...testCase, result, passed });
      } catch (error) {
        newResults.push({ ...testCase, result: `Error: ${error.message}`, passed: false });
      }
    }

    const endTime = performance.now();
    setTimeTaken(((endTime - startTime) / 1000).toFixed(2)); // Convert to seconds and fix to 2 decimal places

    setResults(newResults);
    setIsLoading(false);
  };

  const resetTests = () => {
    setResults([]);
    setTimeTaken(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">New Detection Tests</h1>
      <div className="mb-4">
        <button className={`btn btn-primary ${isLoading ? "loading" : ""}`} onClick={runTests} disabled={isLoading}>
          {isLoading ? "Running..." : "Run Tests"}
        </button>
        <button className="btn btn-ghost ml-2" onClick={resetTests} disabled={isLoading}>
          Reset
        </button>
      </div>
      {timeTaken > 0 && <p className="mb-4">Time taken: {timeTaken} seconds</p>}
      <div className="flex flex-col gap-4">
        {results.map((test, index) => (
          <div key={index} className={`alert ${test.passed ? "alert-success" : "alert-error"}`}>
            <p>
              <strong>{test.description}</strong> - Expected: {test.expected}, Got: {test.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
