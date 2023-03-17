import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
]);

export default App;
