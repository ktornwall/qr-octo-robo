import React from "react";
import TopNav from "./NavBar";
import LibraryPage from "./pages/LibraryPage";

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <TopNav />
      <div className="pt-16 h-screen">
        <LibraryPage />
      </div>
    </>
  );
};

export default App;
