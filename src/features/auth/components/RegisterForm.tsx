import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

export function RegisterForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Şifrələr eyni deyil.");
      setLoading(false);
      return;
    }

    try {
      const result = await authService.register({
        fullName,
        email,
        password,
        confirmPassword,
      });

      console.log("Register response:", result);

      navigate("/login");
    } catch (err: any) {
      console.log("Register error:", err);

      setError(
        err.response?.data?.message ||
          err.response?.data?.Message ||
          err.message ||
          "Qeydiyyat zamanı xəta baş verdi."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>CampusConnect</h1>
      <h2>Qeydiyyat</h2>

      {error && <p className="error-text">{error}</p>}

      <input
        type="text"
        placeholder="Ad Soyad"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Şifrə"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Şifrə təkrarı"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Yüklənir..." : "Qeydiyyatdan keç"}
      </button>

      <p className="auth-link">
        Hesabın var? <Link to="/login">Daxil ol</Link>
      </p>
    </form>
  );
}