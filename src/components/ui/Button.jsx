function Button({
  children,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        gap-3
        px-8
        py-4
        rounded-full
        border
        border-white
        bg-transparent
        text-white
        uppercase
        tracking-[0.2em]
        text-sm
        cursor-pointer
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
        ${className}
      `}
    >
      <span>{children}</span>
      <span>→</span>
    </button>
  );
}

export default Button;