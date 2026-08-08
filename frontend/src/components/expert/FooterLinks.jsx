import { useNavigate } from "react-router-dom";

function FooterLinks() {
  const navigate = useNavigate();
  return (
    <div className="mt-8 text-center">

      <p className="text-gray-500">
        Interested in joining our network?
      </p>

      <button
  onClick={() => navigate("/expert-register")}
  className="mt-2 text-pink-600 font-semibold hover:underline"
>
  Apply to be a Consultant
</button>

    </div>
  );
}

export default FooterLinks;