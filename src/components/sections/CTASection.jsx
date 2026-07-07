import { Link } from "react-router-dom";
import Container from "../ui/Container";

function CTASection() {
  return (
    <section className="py-20 md:py-28 lg:py-40 bg-[#050505]">

      <Container>

        <div
          className="
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-white/[0.04]
            to-white/[0.02]
            p-16
            lg:p-24
            text-center
            overflow-hidden
            relative
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[650px]
              h-[650px]
              rounded-full
              bg-red-500/10
              blur-[180px]
            "
          />

          <div className="relative z-10">

            <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
              Let's Work Together
            </p>

            <h2
              className="
                font-['Syne']
                text-5xl
                md:text-4xl sm:text-5xl lg:text-7xl
                lg:text-[90px]
                leading-[0.9]
                tracking-[-0.05em]
                font-bold
              "
            >
              Ready To Tell
              <br />
              Your Story?
            </h2>

            <p
              className="
                mt-10
                max-w-2xl
                mx-auto
                text-lg
                leading-9
                text-gray-400
              "
            >
              Whether it's a brand film, commercial,
              photography or digital campaign—
              let's create something unforgettable together.
            </p>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-4
                mt-14
                px-8
                py-5
                rounded-full
                bg-white
                text-black
                uppercase
                tracking-[0.22em]
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Start Your Project →

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default CTASection;