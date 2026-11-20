import { Link, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Box, LayoutDashboard, LogOut, ShoppingCart, Plus } from "lucide-react";

const Header = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border";

    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC]`;
    } else {
      return baseClass;
    }
  };

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>
        {user ? (
          <div className="flex items-center gap-8 text-white">
            <div className="flex items-center gap-2 text-[#F2DAAC]">
              <Link to="/">
                <div className={getNavItemClass("/")}>
                  <Box size={18} />
                </div>
              </Link>
              <Link to="/pedidos">
                <div className={getNavItemClass("/pedidos")}>
                  <LayoutDashboard size={18} />
                </div>
              </Link>
              <Link to="/pedidos">
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border">
                  <Plus size={18} />
                </div>
              </Link>
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
