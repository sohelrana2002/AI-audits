import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import DetectorPlugin from "./pages/DetectorPlugin/DetectorPlugin";
import Footer from "./shared/Footer/Footer";
import ScrollToTop from "./helper/ScrollToTop/ScrollToTop";
import PlagiarismChecking from "./pages/PlagiarismChecking/PlagiarismChecking";
import DetectionScore from "./pages/DetectionScore/DetectionScore";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/AI-audits/" element={<Home />} />
          <Route exact path="/AI-audits/contact" element={<ContactUs />} />
          <Route
            exact
            path="/AI-audits/ai-content-detector-plugin"
            element={<DetectorPlugin />}
          />
          <Route
            exact
            path="/AI-audits/plagiarism-checking"
            element={<PlagiarismChecking />}
          />
          <Route
            exact
            path="/AI-audits/detection-score"
            element={<DetectionScore />}
          />
          <Route
            exact
            path="/AI-audits/privacy-policy"
            element={<PrivacyPolicy />}
          />
          <Route
            exact
            path="/AI-audits/terms-conditions"
            element={<TermsConditions />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
