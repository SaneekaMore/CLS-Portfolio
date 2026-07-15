import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import logoWhite from "../../assets/logos/logo-white.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (item) => {
    setMenuOpen(false);

    if (item === "Contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(item.toLowerCase())
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 150);

      return;
    }

    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-black/50 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <Container>
          <nav className="flex items-center justify-between py-4 sm:py-5">

            <Link
              to="/"
              className="flex items-center gap-3 sm:gap-4 pl-4 sm:pl-6 lg:pl-8"
            >

              <img
                src={logoWhite}
                alt="Content With Lens"
                className="
                w-11
                h-11
                sm:w-14
                sm:h-14
                object-contain
                drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]
                transition-all
                duration-300
                hover:scale-105
                "
              />
              <div
                className="
                  flex
                  items-center
                  translate-y-[3px]
                  whitespace-nowrap
                "
              >
                <h1
                  className="
                    font-['Syne']
                    text-xl
                    sm:text-2xl
                    tracking-[0.02em]
                    text-white
                    leading-none
                  "
                >
                  <span className="font-extrabold">
                    CONTENT
                  </span>

                  <span className="font-normal px-2 uppercase">
                    WITH
                  </span>

                  <span className="font-extrabold">
                    LENS
                  </span>
                </h1>
              </div>

            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                mr-4
                sm:mr-6
                lg:mr-12
                w-11
                h-11
                sm:w-12
                sm:h-12
                lg:w-14
                lg:h-14
                rounded-full
                border
                border-white/20
                backdrop-blur-md
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </nav>
        </Container>
      </header>

      {menuOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black
            flex
            items-center
            justify-center
          "
        >
          <div className="text-center space-y-8 sm:space-y-10">

            {["About", "Services", "Work", "Team", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className="
                  block
                  w-full
                  bg-transparent
                  text-center
                  font-['Syne']
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  hover:text-red-500
                  transition
                "
              >
                {item}
              </button>
            ))}

          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;