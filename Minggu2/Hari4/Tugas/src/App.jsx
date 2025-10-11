import React from "react";
import FetchData from "./components/FetchData";
import AxiosData from "./components/AxiosData";
import FetchDataWithStatus from "./components/FetchDataWithStatus";
import AbortControllerComponents from "./components/AbortControlleComponents";
import FetchPosts from "./components/FetchPosts";


export default function App() {
  return (
    <div>
      <FetchData />
      <AxiosData />
      <FetchDataWithStatus />
      {/* <AbortControllerComponents /> */}
      <FetchPosts />
    </div>
  );
}