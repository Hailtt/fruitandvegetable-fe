import { Fragment, useState } from "react";
import { Products } from "./components";
import Mainlayout from "./layout/Mainlayout";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./utils/routes";
//asdasds
function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      {isLogin ? (
        <Routes>
          {PrivateRoutes.map((route, index) => {
            let DefauleLayout = Fragment;
            if (route.layout !== null) {
              DefauleLayout = route.layout;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefauleLayout>
                    <Page />
                  </DefauleLayout>
                }
              />
            );
          })}
        </Routes>
      ) : (
        <Routes>
          {PrivateRoutes.map((route, index) => {
            let DefauleLayout = Fragment;
            if (route.layout !== null) {
              DefauleLayout = route.layout;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefauleLayout>
                    <Page />
                  </DefauleLayout>
                }
              />
            );
          })}
        </Routes>
      )}
    </div>
  );
}

export default App;
