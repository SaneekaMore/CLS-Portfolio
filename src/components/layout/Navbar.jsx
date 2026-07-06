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
          <nav className="flex items-center justify-between py-8">

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-4 pl-6 lg:pl-8"
            >
              <img
                src={logoWhite}
                alt="Content With Lens"
                className="
                  w-12
                  h-12
                  lg:w-14
                  lg:h-14
                  object-contain
                  drop-shadow-[0_0_10px_rgba(255,255,255,0.18)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              />

              <div>
                <h1
                  className="
                    font-['Syne']
                    text-xl
                    leading-none
                    tracking-[0.25em]
                    font-bold
                    text-white
                  "
                >
                  CONTENT
                </h1>

                <p
                  className="
                    mt-1
                    text-[11px]
                    uppercase
                    tracking-[0.42em]
                    text-gray-400
                  "
                >
                  WITH LENS
                </p>
              </div>
            </Link>

            {/* Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                mr-8
                lg:mr-12
                w-14
                h-14
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
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </nav>
        </Container>
      </header>

      {/* Fullscreen Menu */}

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
          <div className="text-center space-y-10">

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
                  text-5xl
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