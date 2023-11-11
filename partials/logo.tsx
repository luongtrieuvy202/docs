import Image from "next/image";

export const LogoImage = () => {
  return (
    <>
      <Image
        src="/logo-dark.png"
        alt="DryerJS dark logo"
        width={100}
        height={30}
        className="dark-logo"
      />
      <Image
        src="/logo-light.png"
        alt="DryerJS light logo"
        width={100}
        height={30}
        className="light-logo"
      />
    </>
  );
};
