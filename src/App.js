import {useRoutes } from "react-router-dom";

import routes from "./routes";
function App() {
  let useroute = useRoutes(routes)
  return (
    <div>
    {useroute}
    </div>
  );
}

export default App;
