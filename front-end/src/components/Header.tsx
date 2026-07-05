const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />
        <div className="has-[35px] flex w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
          Entrar
        </div>
      </div>
    </div>
  );
};

export default Header;
