import Button from "../ui/Button";
import Container from "../ui/Container";
import heroImage from "../../assets/images/hero-team.webp";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}

      <img
        src={heroImage}
        alt="Content With Lens Team"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover

          object-[72%_center]
          sm:object-[68%_center]
          lg:object-[65%_center]

          scale-100

          -z-30
          select-none
          pointer-events-none
        "
      />

      {/* Cinematic Overlay */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-black/90
          via-black/60
          to-black/80
        "
      />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.82)_100%)]
        "
      />

      <Container>

        <div
          className="
            min-h-screen
            flex
            items-center

            pt-36
            pb-24

            sm:pt-32
            lg:pt-36
          "
        >

          <div
            className="
              w-full
              max-w-[340px]
              sm:max-w-xl
              lg:max-w-[700px]
            "
          >

            <p
              className="
                uppercase
                text-[10px]
                sm:text-xs
                tracking-[0.18em]
                sm:tracking-[0.45em]
                text-gray-400
                mb-5
                sm:mb-8
              "
            >
              Brand Films • Commercials • Photography
            </p>

            <h1
              className="
                font-['Syne']
                font-bold
                text-white
                tracking-[-0.05em]

                text-[52px]
                leading-[0.92]

                sm:text-[66px]
                md:text-[82px]
                lg:text-[96px]
              "
            >
              Crafting Stories
              <br />
              That Stay
              <br />
              With You.
            </h1>

            <p
              className="
                mt-6
                sm:mt-8

                max-w-[620px]

                text-[16px]
                sm:text-lg

                leading-7
                sm:leading-8

                text-gray-200
              "
            >
              At CL Studios, we craft cinematic stories that help brands
              connect, inspire and leave lasting impressions through films,
              commercials, photography and digital content.
            </p>

            <div className="mt-10 sm:mt-12 w-full sm:w-auto">

              <Button
                className="w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                View Our Work
              </Button>

            </div>

          </div>

        </div>

      </Container>

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-full
          h-40
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

      {/* Scroll Indicator */}

      <div
        className="
          absolute
          bottom-6
          sm:bottom-8

          left-1/2
          -translate-x-1/2

          flex
          flex-col
          items-center
        "
      >

        <p
          className="
            uppercase
            tracking-[0.30em]
            text-[10px]
            sm:text-xs
            text-gray-400
          "
        >
          Scroll
        </p>

        <span
          className="
            mt-2
            text-xl
            sm:text-2xl
            animate-bounce
          "
        >
          ↓
        </span>

      </div>

    </section>
  );
}

export default Hero;