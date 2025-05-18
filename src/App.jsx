import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">CV Builder</h1>
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 flex gap-8">
        <div className="w-1/2">
          <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
        </div>
        {/* preview */}
        <div className="w-1/2 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
          <div className="flex space-x-6 text-gray-600 mb-8">
            <div>
              <h3 className="font-bold text-xl">
                {generalInfo.name || "Your Name"}
              </h3>
              <p>{generalInfo.email || "your.email@example.com"}</p>
              <p>+91 {generalInfo.phone || "1234567890"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
