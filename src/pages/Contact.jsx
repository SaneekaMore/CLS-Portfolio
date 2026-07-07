import Container from "../components/ui/Container";
import logoWhite from "../assets/logos/logo-white.png";

function Contact() {
  return (
    <section className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* Background Watermark */}
      <img
        src={logoWhite}
        alt=""
        className="
          absolute
          right-[-120px]
          top-20
          w-[500px]
          opacity-[0.04]
          pointer-events-none
          select-none
        "
      />

      <Container>

        <div className="pt-40 pb-28">

          <p className="uppercase tracking-[0.45em] text-xs text-red-500 mb-8">
            CONTACT
          </p>

          <h1
            className="
              font-['Syne']
              text-6xl
              md:text-8xl
              lg:text-[90px]
              leading-[0.9]
              tracking-[-0.06em]
              font-bold
            "
          >
            Let's Create
            <br />
            Something
            <br />
            Unforgettable.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-gray-400">
            Whether it's a brand film, commercial,
            corporate shoot, photography or digital campaign—
            we'd love to hear your story.
          </p>

          {/* Contact Grid */}

          <div className="grid md:grid-cols-2 gap-14 mt-24">

            {/* Email */}

            <div>

              <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-6">
                EMAIL
              </p>

              <a
                href="mailto:contentwithlens@gmail.com"
                className="block text-2xl hover:text-red-500 transition"
              >
                contentwithlens@gmail.com
              </a>

              <a
                href="mailto:contentwithlens6@gmail.com"
                className="block mt-4 text-2xl hover:text-red-500 transition"
              >
                contentwithlens6@gmail.com
              </a>

            </div>

            {/* Phone */}

            <div>

              <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-6">
                PHONE
              </p>

              <a
                href="tel:+919890742464"
                className="block text-2xl hover:text-red-500 transition"
              >
                +91 98907 42464
              </a>

              <a
                href="tel:+917249482409"
                className="block mt-4 text-2xl hover:text-red-500 transition"
              >
                +91 72494 82409
              </a>

            </div>

            {/* Social */}

            <div>

              <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-6">
                SOCIAL
              </p>

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
                className="block mt-4 hover:text-red-500 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@clstudios6900"
                target="_blank"
                rel="noreferrer"
                className="block mt-4 hover:text-red-500 transition"
              >
                YouTube • CL Studios
              </a>

              <a
                href="https://www.youtube.com/@travelingtribe6900"
                target="_blank"
                rel="noreferrer"
                className="block mt-4 hover:text-red-500 transition"
              >
                YouTube • Traveling Tribe
              </a>

            </div>

            {/* Location */}

            <div>

              <p className="uppercase tracking-[0.35em] text-xs text-gray-500 mb-6">
                LOCATION
              </p>

              <p className="text-2xl">
                Pune, Maharashtra, India
              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default Contact;