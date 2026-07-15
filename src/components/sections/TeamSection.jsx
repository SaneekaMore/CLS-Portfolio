import team from "../../data/team";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function TeamSection() {
  return (
    <section
      id="team"
      className="bg-[#050505] py-24 md:py-32 lg:py-40"
    >
      <Container>
        {/* Heading */}

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-28">
          <SectionTitle
            label="The Studio"
            title="Meet The Founders."
          />

          <div>
            <blockquote
              className="
                font-['Syne']
                italic
                text-3xl
                md:text-5xl
                leading-tight
                text-white
              "
            >
              “The ideas.
              <br />
              The coffee.
              <br />
              The chaos.
              <br />
              And somehow,
              <br />
              it all works.”
            </blockquote>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
              Every story starts with a vision. Meet the founders behind
              Content With Lens, shaping ideas into cinematic experiences.
            </p>
          </div>
        </div>

        {/* Founders */}

        <div className="max-w-7xl mx-auto space-y-32 lg:space-y-40">
          {team.map((member, index) => (
            <div key={member.id}>
              <div
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-[#090909]
                  transition-all
                  duration-700
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:shadow-[0_25px_70px_rgba(255,255,255,0.04)]

                  flex
                  flex-col

                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >
                {/* IMAGE */}

                <div className="relative lg:w-[58%] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-[420px]
                      md:h-[520px]
                      lg:h-[620px]
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Cinematic Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Soft Vignette */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                    "
                  />
                </div>

                {/* CONTENT */}

                <div
                  className="
                    lg:w-[42%]
                    flex
                    items-center
                    px-8
                    md:px-12
                    lg:px-16
                    py-12
                  "
                >
                  <div>
                    {/* Accent */}

                    <div
                      className="
                        h-[2px]
                        w-16
                        bg-red-500
                        mb-8
                        transition-all
                        duration-500
                        group-hover:w-28
                      "
                    />

                    <p
                      className="
                        uppercase
                        tracking-[0.4em]
                        text-xs
                        text-gray-500
                        mb-5
                      "
                    >
                      {member.designation}
                    </p>

                    <h3
                      className="
                        font-['Syne']
                        text-4xl
                        md:text-5xl
                        leading-[1.05]
                        text-white
                        font-semibold
                      "
                    >
                      {member.name}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-xl
                        text-gray-300
                        leading-relaxed
                      "
                    >
                      {member.role}
                    </p>

                    <p
                      className="
                        mt-10
                        text-gray-400
                        leading-8
                        text-lg
                        max-w-md
                      "
                    >
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}

              {index !== team.length - 1 && (
                <div className="flex justify-center mt-16 lg:mt-20">
                  <div className="h-px w-40 md:w-64 bg-white/10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSection;