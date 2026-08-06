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

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, password, confirm, cep });
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-4" />
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
        <Button title="Criar conta" />
        <Button title="Já tenho uma conta" variant="outline" />
      </div>
    </form>
  );
};

export default Register;
