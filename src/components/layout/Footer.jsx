import logoWhite from "../../assets/logos/logo-white.png";

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-24">

        <div className="grid lg:grid-cols-3 gap-20">

          {/* Left */}

          <div>

            <img
              src={logoWhite}
              alt="Content With Lens"
              className="w-28 mb-6"
            />

            <p className="text-gray-400 text-lg leading-10 max-w-sm">
              Creating cinematic stories that inspire,
              connect, and leave a lasting impression.
            </p>

          </div>

          {/* Middle */}

          <div>

            <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-8">
              CONNECT
            </p>

            <div className="space-y-5">

              <a
                href="https://www.instagram.com/clstudios_6900/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-red-500 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/content-with-lens/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-red-500 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@clstudios6900"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-red-500 transition"
              >
                YouTube • CL Studios
              </a>

              <a
                href="https://www.youtube.com/@travelingtribe6900"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-red-500 transition"
              >
                YouTube • Traveling Tribe
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mb-8">
              CONTACT
            </p>

            <div className="space-y-5">

              <a
                href="mailto:contentwithlens6@gmail.com"
                className="block hover:text-red-500 transition"
              >
                contentwithlens6@gmail.com
              </a>

              <a
                href="tel:+919890742464"
                className="block hover:text-red-500 transition"
              >
                +91 98907 42464
              </a>

              <a
                href="tel:+917249482409"
                className="block hover:text-red-500 transition"
              >
                +91 72494 82409
              </a>

              <p className="text-gray-400">
                Pune, Maharashtra, India
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © 2026 Content With Lens. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed & Developed with ❤️ by Saneeka More
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;