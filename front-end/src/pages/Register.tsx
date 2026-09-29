import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password, cep }),
      });

      switch (response.status) {
        case 409:
          setError("E-mail já cadastrado");
          break;
        case 400:
          setError("Todas as informações são obrigatórias");
          break;
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setCep("");
          setError("");
          break;
        case 500:
          setError("Tente novamente mais tarde");
          break;
        default:
          setError("");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      return;
    }
    console.log({ name, email, password, confirm, cep });
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

        <Input
          placeholder="Nome Completo"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />
        <p className="font-bold text-red-500">{error}</p>

        <div className="mt-3 flex w-full flex-col gap-2">
          <Button title="Criar conta" type="submit" />
          <Link to="/login" className="w-full">
            <Button title="Já tenho uma conta" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
