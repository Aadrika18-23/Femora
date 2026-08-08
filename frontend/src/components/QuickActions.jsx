import { useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaRobot,
  FaBookMedical,
  FaUsers,
} from "react-icons/fa";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Consult",
      subtitle: "Talk to Experts",
      icon: <FaUserMd />,
      color: "bg-pink-100 text-pink-600",
      path: "/consult",
    },
    {
      title: "EERA AI",
      subtitle: "Health Assistant",
      icon: <FaRobot />,
      color: "bg-purple-100 text-purple-600",
      path: "/ai-chat",
    },
    {
      title: "Library",
      subtitle: "Health Articles",
      icon: <FaBookMedical />,
      color: "bg-blue-100 text-blue-600",
      path: "/health-library",
    },
    {
      title: "Community",
      subtitle: "Safe Space",
      icon: <FaUsers />,
      color: "bg-green-100 text-green-600",
      path: "/community",
    },
  ];

  return (
    <div className="mt-12">

      <h2 className="text-3xl font-bold text-gray-900">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

        {actions.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl cursor-pointer transition hover:-translate-y-1"
          >

            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.color}`}
            >
              {item.icon}
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-500 text-sm">
              {item.subtitle}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;