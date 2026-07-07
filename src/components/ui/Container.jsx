function Container({ children, className = "" }) {
  return (
    <div
      className={`
        w-full
        max-w-[1700px]
        mx-auto
        px-6
        sm:px-10
        md:px-16
        lg:px-24
        xl:px-32
        2xl:px-40
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;