import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { config } from "@/config";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const signOut = useAuthStore((s) => s.signOut);

  const handleLogin = () => {
    window.location.href = config.AUTH_LOGIN_URL;
  };

  return (
    <nav>
      <div>
        <strong>VIT Typing Stats</strong>

        <Link to="/">Leaderboards</Link>
        {user && (
          <Link to="/settings">Settings</Link>
        )}
      </div>

      <div>
        {user ? (
          <>
            <span>{user.displayName}</span>
            <button onClick={signOut}>Logout</button>
          </>
        ) : (
          <button onClick={handleLogin}>Login with Discord</button>
        )}
      </div>
    </nav>
  );
}