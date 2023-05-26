const LoginFooter = () => {
  return (
    <div className=" bg-[#F5F5F5] h-[71px] sm:h-[56px] flex items-center">
      <footer className="flex w-full mx-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-ligthblue">Cómo cuidamos tu privacidad</span>
            <span className="text-[#0000008c]">Copyright © 1999-2023 MercadoLibre S.R.L.</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-[#0000008c]">Protegido por reCAPTCHA</span>
            <span className="text-[11px]">- Privacidad</span>
            <span className="text-[11px]">- Condiciones</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginFooter;
