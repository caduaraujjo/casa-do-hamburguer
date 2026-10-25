import { useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router";
import Button from "../components/Button";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("E-mail e senha sáo obrigatórios");
        return;
      }

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.status === 404) {
        setError("Usuário não encontrado");
        return;
      }

      if (response.status === 400) {
        setError("Usuário e senha são obrigatórios");
        return;
      }

      if (response.status === 401) {
        setError("Credencias inválidas");
        return;
      }

      if (response.status === 500) {
        setError("Erro no servidor");
        return;
      }

      if (response.status === 200) {
        setError("");
        const data = await response.json();
        navigate("/");
        setUser(data);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mx-auto mb-4" />
        </Link>

        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
          />
          <p className="text-left text-sm font-bold text-red-500">{error}</p>
        </div>

        <Button title="Login" type="submit" />

        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
