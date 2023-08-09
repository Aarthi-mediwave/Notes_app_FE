import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNavigator } from "./AppNavigation/Navigation";

function App() {
  return (
    <Router>
      <AppNavigator />
    </Router>
  );
}

export default App;
