import { Link } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />
        <Link to="/login">
          {user ? (
            <p className="text-white">Olá, {user.name}</p>
          ) : (
            <div className="has-[35px] flex w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
