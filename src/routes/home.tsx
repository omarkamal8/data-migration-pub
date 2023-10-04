import { useState } from "react";
import NavBar from "../components/nav-bar";
const Home = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles(newFiles);
  };

  const handleStartButtonClick = () => {
    // Implement your logic for starting processing the uploaded files
    console.log("Start button clicked");
  };

  return (
    <div className="bg-gray-900 dark h-screen">
      <div className="container ">
        <NavBar />

        <h1 className="text-4xl font-bold text-center my-6 text-gray-100 ">
          Welcome to the QESTIT Data Migration Tool
        </h1>

        <label
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload Mapping Sheet
        </label>
        <input
          className="block w-1/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          accept=".xlsx"
        />
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          XLSX
        </p>
        

        <button
          onClick={handleStartButtonClick}
          className="text-gray-100 font-semibold mt-8 bg-green-500 hover:bg-green-600 active:bg-green-500/70 rounded py-1 px-2 "
        >
          Start Processing
        </button>
      </div>
    </div>
  );
};

export default Home;
