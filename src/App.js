import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RestElements from "./RestElemets";
import ResponsiveLeftMenu from "./ResponsiveLeftMenu";
// import { HeartFilled } from "@ant-design/icons";

const App = () => {
  const [showApp, setShowApp] = useState(true);

  return (
    <div className="App">
      {showApp && (
        <div className="AppElements">
          <Link to="/responsive-left-menu" onClick={() => setShowApp(false)}>
            Responsive Left Menu
          </Link>
          <Link to="/rest-elements" onClick={() => setShowApp(false)}>
            Many Different Ant Design Elements
          </Link>
        </div>
      )}
      <Routes>
        <Route
          path="/rest-elements"
          element={<RestElements setShowApp={setShowApp} />}
        />
        ;
        <Route
          path="/responsive-left-menu"
          element={<ResponsiveLeftMenu setShowApp={setShowApp} />}
        />
        ;
      </Routes>
    </div>
  );
};

export default App;
