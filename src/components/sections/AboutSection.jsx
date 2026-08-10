import Container from "../ui/Container";

function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 lg:py-40 bg-[#050505]"
    >
      <Container>

        {/* Section Label */}

        <div className="flex items-center gap-4 mb-8">

          <span className="block w-8 h-[2px] bg-red-500" />

          <p
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-gray-500
            "
          >
            Who We Are
          </p>

        </div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            lg:gap-24
            items-start
          "
        >

          {/* LEFT — STORY */}

          <div>

            <h2
              className="
                font-['Syne']
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-[76px]
                xl:text-[82px]
                leading-[0.92]
                tracking-[-0.055em]
                font-bold
                text-white
              "
            >
              Stories Worth
              <br />
              Remembering.
            </h2>

            <div
              className="
                mt-10
                max-w-[650px]
                text-lg
                md:text-xl
                leading-8
                text-gray-400
              "
            >

              <p>
                At CL Studios, we believe every brand has a story worth
                telling. Ours just happens to involve cameras, coffee,
                countless retakes, and the occasional{" "}
                <em className="text-gray-300">
                  "one last shot"
                </em>{" "}
                that somehow turns into twenty more.
              </p>

              <p className="mt-5">
                We blend storytelling, strategy, and cinematic execution to
                create content that feels human. Whether it's a brand film,
                commercial, corporate film, or social media campaign, we
                create visuals that connect, inspire, and stay with people
                long after they've watched.
              </p>

            </div>

            {/* Closing Statement */}

            <p
              className="
                mt-12
                font-['Syne']
                text-2xl
                md:text-3xl
                font-semibold
                leading-tight
                text-white
              "
            >
              Good content gets views.
              <br />
              Great stories get{" "}
              <span className="text-red-500">
                remembered.
              </span>
            </p>

          </div>

          {/* RIGHT — STATS */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              lg:pt-8
            "
          >

            {/* Card 1 */}

            <div
              className="
                min-h-[190px]
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.035]
                p-8
                md:p-10
                transition-all
                duration-500
                hover:border-red-500/30
              "
            >
              <h3
                className="
                  font-['Syne']
                  text-5xl
                  md:text-6xl
                  font-bold
                  text-white
                "
              >
                3+
              </h3>

              <p
                className="
                  mt-6
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  leading-6
                  text-gray-500
                "
              >
                Years Creating
                <br />
                Stories
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
                min-h-[190px]
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.035]
                p-8
                md:p-10
                transition-all
                duration-500
                hover:border-red-500/30
              "
            >
              <h3
                className="
                  font-['Syne']
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                Pune
              </h3>

              <p
                className="
                  mt-6
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  text-gray-500
                "
              >
                Based Studio
              </p>
            </div>

            {/* Card 3 */}

            <div
              className="
                min-h-[190px]
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.035]
                p-8
                md:p-10
                transition-all
                duration-500
                hover:border-red-500/30
              "
            >
              <h3
                className="
                  font-['Syne']
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                India
              </h3>

              <p
                className="
                  mt-6
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  leading-6
                  text-gray-500
                "
              >
                Available
                <br />
                Nationwide
              </p>
            </div>

            {/* Card 4 */}

            <div
              className="
                min-h-[190px]
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.035]
                p-8
                md:p-10
                transition-all
                duration-500
                hover:border-red-500/30
              "
            >
              <h3
                className="
                  font-['Syne']
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                End-to-End
              </h3>

              <p
                className="
                  mt-6
                  uppercase
                  tracking-[0.3em]
                  text-xs
                  leading-6
                  text-gray-500
                "
              >
                Creative
                <br />
                Production
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default AboutSection;