import team from "../../data/team";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function TeamSection() {
  return (
    <section
      id="team"
      className="py-40 bg-[#050505]"
    >
      <Container>

        {/* Section Intro */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          <SectionTitle
            label="The Studio"
            title="The People Behind The Lens."
          />

          <div className="lg:pl-10">

            <blockquote
              className="
                font-['Syne']
                italic
                text-3xl
                md:text-4xl
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

            <p
              className="
                mt-10
                max-w-lg
                text-lg
                leading-9
                text-gray-400
              "
            >
              Meet the people turning ideas into unforgettable stories.
            </p>

          </div>

        </div>

        {/* Team Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {team.map((member) => (

            <div
              key={member.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#0b0b0b]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-white/20
              "
            >

              <div className="aspect-[4/5] overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-8
                "
              >

                <div
                  className="
                    h-[2px]
                    w-14
                    bg-red-500
                    mb-6
                    transition-all
                    duration-500
                    group-hover:w-24
                  "
                />

                <h3
                  className="
                    font-['Syne']
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {member.name}
                </h3>

                <p className="mt-2 text-gray-300">
                  {member.role}
                </p>

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-gray-400
                    opacity-0
                    translate-y-4
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  "{member.quote}"
                </p>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default TeamSection;