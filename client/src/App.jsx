// Importing React-Router-Dom components
import { Routes, Route } from "react-router-dom";

// Importing page components for Routes
import Home from "./pages/Home";
import Account from "./pages/Account";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

// Importing Header & Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Imports stylesheet for App Component
import "./App.scss";

function App() {
  return (
    <>
      {/* Header at top of all pages */}
      <Header />

        {/* Container for all our routes */}
        <Routes>
          {/* Route for Home page. If user goes to path "/", render the Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for Account page. If user goes to path "/Account", render the Account page */}
          <Route path="/account" element={<Account />} />
          {/* Route for Quiz page. If user goes to path "/Quiz", render the Quiz page  */}
          <Route path="/quiz" element={<Quiz />} />
          {/* Route for Results page. If user goes to path "/Results", render the Results page  */}
          <Route path="/results" element={<Results />} />
        </Routes>

      {/* Footer at bottom of all pages */}
      <Footer />
    </>
  );
}

export default App;
