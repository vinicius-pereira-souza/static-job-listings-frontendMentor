export default function HeaderImage() {
  return (
    <div className="bg-cyan-500 absolute w-full top-0 left-0 z-10">
      <img
        className="block md:hidden bg-cover"
        src="images/bg-header-mobile.svg"
        alt="bg-header-mobile"
      />
      <img
        className="hidden md:block"
        src="images/bg-header-desktop.svg"
        alt="bg-header-mobile"
      />
    </div>
  );
}
