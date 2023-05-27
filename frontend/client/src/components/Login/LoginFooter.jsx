const LoginFooter = () => {
  return (
    <div className=" bg-[#F5F5F5] h-[71px] sm:h-[56px] flex items-center">
      <footer className="flex w-full mx-8">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="flex items-center gap-2 text-[11px]">
            <p className="text-ligthblue">Cómo cuidamos tu privacidad</p>
            <span className="text-[11px] text-[#0000008c]">-</span>
            <p className="text-[#0000008c]">Copyright © 1999-2023 MercadoLibre S.R.L.</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-[12px] text-[#0000008c]">Protegido por reCAPTCHA</p>
            <span className="text-[11px] text-[#0000008c]">-</span>
            <p className="text-[11px]">Privacidad</p>
            <span className="text-[11px] text-[#0000008c]">-</span>
            <p className="text-[11px]">Condiciones</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginFooter;
