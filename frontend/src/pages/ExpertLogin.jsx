import Card from "../components/Card";
import LogoHeader from "../components/expert/LogoHeader";
import LoginForm from "../components/expert/LoginForm";
import BiometricButtons from "../components/expert/BiometricButtons";
import FooterLinks from "../components/expert/FooterLinks";

function ExpertLogin() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4 py-10">

      <Card className="w-full max-w-lg p-8 rounded-3xl shadow-xl">

        <LogoHeader />

        <LoginForm />

        <BiometricButtons />

        <FooterLinks />

      </Card>

    </div>
  );
}

export default ExpertLogin;