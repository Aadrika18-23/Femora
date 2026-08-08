import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AIHome from "./pages/AIHome";
import ExpertLogin from "./pages/ExpertLogin";
import ExpertDashboard from "./pages/ExpertDashboard";
import ConsultationRequest from "./pages/ConsultationRequest";
import ConsultationConfirmed from "./pages/ConsultationConfirmed";
// import ExpertRegister from "./pages/ExpertRegister";
import LiveConsultation from "./pages/LiveConsultation";

import AIAssistant from "./pages/AIAssistant";
import Community from "./pages/Community";
import Consult from "./pages/Consult";
import Profile from "./pages/Profile";
import ChooseRole from "./pages/ChooseRole";
import IdentityVerification from "./pages/IdentityVerification";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import PrivacyConsent from "./pages/PrivacyConsent";
import DoctorProfile from "./pages/DoctorProfile";
import BookConsultation from "./pages/BookConsultation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseRole />} />

        <Route path="/choose-role" element={<ChooseRole />} />

        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/identity-verification" element={<IdentityVerification />} />

        <Route path="/privacy-consent"element={<PrivacyConsent />}/>

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/ai-chat" element={<AIAssistant />} />

        <Route path="/community" element={<Community />} />

        <Route path="/consult" element={<Consult />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/expert-login" element={<ExpertLogin />} />

        <Route path="/expert-dashboard"element={<ExpertDashboard />}/>

        <Route path="/consultation-request"element={<ConsultationRequest />}/>

        <Route path="/doctor-profile"element={<DoctorProfile />}/>

        <Route path="/book-consultation"element={<BookConsultation />}/>

        <Route path="/consultation-confirmed"element={<ConsultationConfirmed />}/>

        {/* <Route path="/expert-register"element={<ExpertRegister />}/> */}

        <Route path="/live-consultation"element={<LiveConsultation />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;