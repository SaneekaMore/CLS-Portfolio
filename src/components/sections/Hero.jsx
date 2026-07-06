import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="relative z-10 min-h-screen bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-250px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-white/5 blur-[220px]" />
      <Container>
        <div className="min-h-screen flex items-center pt-28 lg:pt-36">

          <div className="max-w-[760px] pt-6">

            <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
              Brand Films • Commercials • Photography
            </p>

            <h1
              className="
                font-['Syne']
                text-[64px]
                sm:text-[82px]
                lg:text-[105px]
                font-bold
                leading-[0.9]
                tracking-[-0.06em]
                text-white
              "
            >
              Crafting Stories
              <br />
              That Stay With You.
            </h1>

            <p className="mt-10 max-w-[640px] text-lg leading-5 text-gray-300">
              At CL Studios, we craft cinematic stories that help brands
              connect, inspire, and leave lasting impressions through films,
              commercials, photography, and digital content.
            </p>

            <div className="mt-14">
            <Button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Our Work
            </Button>
            </div>

          </div>

        </div>
      </Container>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
          Scroll
        </p>

        <span className="mt-2 text-2xl animate-bounce">
          ↓
        </span>

      </div>

    </section>
  );
}

export default Hero;