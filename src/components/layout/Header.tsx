import { useNavigate } from "react-router-dom";
import { TokenManager } from "../../utils/tokenManager";

export function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    TokenManager.clearTokens();
    navigate("/login");
  }

  return (
    <header className="header">
      <h3>CampusConnect</h3>

      <button onClick={handleLogout}>Çıxış</button>
    </header>
  );
}