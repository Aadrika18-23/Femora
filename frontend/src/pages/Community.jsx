import { useState } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import Card from "../components/Card";

function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Anonymous User",
      time: "5 min ago",
      verified: false,
      text: "Has anyone experienced severe cramps before periods?",
      likes: 12,
      liked: false,
    },
    {
      id: 2,
      author: "Dr. Priya",
      time: "12 min ago",
      verified: true,
      text: "Staying hydrated and tracking symptoms helps identify recurring patterns.",
      likes: 24,
      liked: false,
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handleLike = (id) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handlePost = (e) => {
    e.preventDefault();

    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      author: "Anonymous User",
      time: "Just now",
      verified: false,
      text: newPost,
      likes: 0,
      liked: false,
    };

    setPosts((currentPosts) => [post, ...currentPosts]);
    setNewPost("");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50 max-w-7xl mx-auto px-4 md:px-6 py-8 pb-28">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900">
          Community
        </h1>

        <p className="mt-2 text-gray-500">
          Connect anonymously with women and verified experts.
        </p>

        {/* Anonymous Post */}
        <Card className="mt-8 p-6">

          <h2 className="text-xl font-semibold text-gray-900">
            Share anonymously
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Your identity stays private.
          </p>

          <form onSubmit={handlePost} className="mt-4">

            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              rows="3"
              className="w-full border border-pink-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-pink-300 resize-none"
            />

            <div className="flex justify-end mt-3">

              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Post Anonymously
              </button>

            </div>

          </form>

        </Card>

        {/* Community Posts */}
        <div className="mt-8 space-y-5">

          {posts.map((post) => (
            <Card key={post.id} className="p-6">

              {/* User */}
              <div className="flex items-center gap-3">

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                    post.verified
                      ? "bg-green-100"
                      : "bg-pink-100"
                  }`}
                >
                  {post.verified ? "🩺" : "👤"}
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {post.author}
                  </h3>

                  {post.verified ? (
                    <p className="text-sm text-green-600 font-medium">
                      ✓ Verified Consultant
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {post.time}
                    </p>
                  )}

                </div>

              </div>

              {/* Post */}
              <p className="mt-5 text-gray-700">
                {post.text}
              </p>

              {/* Actions */}
              <div className="mt-5 flex items-center gap-6">

                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 transition ${
                    post.liked
                      ? "text-pink-600 font-semibold"
                      : "text-gray-500 hover:text-pink-600"
                  }`}
                >
                  {post.liked ? "❤️" : "♡"}
                  <span>{post.likes}</span>
                </button>

                <button className="text-gray-500 hover:text-pink-600 transition">
                  💬 Reply
                </button>

              </div>

            </Card>
          ))}

        </div>

      </main>

      <BottomNav />
    </>
  );
}

export default Community;