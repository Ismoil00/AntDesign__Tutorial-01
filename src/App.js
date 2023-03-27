import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import RestElements from "./RestElemets";
import ResponsiveLeftMenu from "./ResponsiveLeftMenu";
import MegaMenu from "./MegaMenu";
import DynamicTable from "./DynamicTable";
import LoginPage from "./LoginPage";
import ImageGalleryApp from "./ImageGalleryApp";
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
          <Link to="/mega-menu" onClick={() => setShowApp(false)}>
            Mega Menu
          </Link>
          <Link to="/dynamic-table" onClick={() => setShowApp(false)}>
            Dynamic Table
          </Link>
          <Link
            to="/login-page"
            onClick={() => setShowApp(false)}
            style={{ color: "darkorange" }}
          >
            Login Page
          </Link>
          <Link
            to="/image-gallery"
            onClick={() => setShowApp(false)}
            style={{ color: "rgb(55, 132, 151)" }}
          >
            Image Gallery mini-App
          </Link>
          <Link
            to="/rest-elements"
            onClick={() => setShowApp(false)}
            style={{ color: "darkred" }}
          >
            Many Different Ant Design Elements
          </Link>
        </div>
      )}
      <Routes>
        <Route
          path="/rest-elements"
          element={<RestElements setShowApp={setShowApp} />}
        />
        <Route
          path="/responsive-left-menu"
          element={<ResponsiveLeftMenu setShowApp={setShowApp} />}
        />
        <Route
          path="/login-page"
          element={<LoginPage setShowApp={setShowApp} />}
        />
        <Route
          path="/mega-menu"
          element={<MegaMenu setShowApp={setShowApp} />}
        />
        <Route
          path="/image-gallery"
          element={<ImageGalleryApp setShowApp={setShowApp} />}
        />
        <Route
          path="/dynamic-table"
          element={<DynamicTable setShowApp={setShowApp} />}
        />
      </Routes>
    </div>
  );
};

export default App;
