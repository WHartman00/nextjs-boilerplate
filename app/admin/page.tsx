export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Admin Access</h1>
      <p className="text-lg text-gray-700 mb-6">Login system coming soon.</p>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            placeholder="admin@thinkfridge.org"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            placeholder="••••••••"
            disabled
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-400 text-white py-2 rounded cursor-not-allowed"
          disabled
        >
          Login
        </button>
      </form>
    </div>
  );
}
