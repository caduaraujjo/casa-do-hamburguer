import { Link } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Box, LayoutDashboard, LogOut, ShoppingCart, Plus } from "lucide-react";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />
        {user ? (
          <div className="flex items-center gap-8 text-white">
            <div className="flex items-center gap-2 text-[#F2DAAC]">
              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border">
                <Box size={18} />
              </div>
              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border">
                <LayoutDashboard size={18} />
              </div>
              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border">
                <Plus size={18} />
              </div>
            </div>
            <div className="relative cursor-pointer">
              <ShoppingCart size={18} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>{user.name}</p>
              <LogOut size={18} className="cursor-pointer" />
            </div>
          </div>
        ) : (
          <Link to="login">
            <div className="has-[35px] flex w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
