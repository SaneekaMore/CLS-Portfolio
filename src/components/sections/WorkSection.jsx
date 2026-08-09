import work from "../../data/work";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { ArrowUpRight } from "lucide-react";

function WorkSection() {
  return (
    <section
      id="work"
      className="py-20 md:py-28 lg:py-40 bg-[#050505]"
    >
      <Container>

        <SectionTitle
          label="Selected Work"
          title="Featured Projects"
        />

        <div
          className="
            mt-16
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
            lg:gap-8
          "
        >

          {work.map((project) => (

            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-[#0b0b0b]

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-white/20
              "
            >

              {/* Subtle red accent for mobile */}

              <span
                className="
                  absolute
                  top-0
                  left-6
                  z-20
                  w-10
                  h-[2px]
                  bg-[#B5121B]

                  sm:hidden
                "
              />

              {/* Image */}

              <div className="aspect-[16/10] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <p
                    className="
                      uppercase
                      tracking-[0.28em]
                      text-[10px]
                      text-gray-500
                    "
                  >
                    {project.category}
                  </p>

                  <span className="text-xs text-gray-500">
                    {project.year}
                  </span>

                </div>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <h3
                    className="
                      font-['Syne']
                      text-xl
                      lg:text-2xl
                      font-semibold
                      leading-tight
                    "
                  >
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={24}
                    className="
                      shrink-0

                      text-gray-400

                      transition-all
                      duration-500

                      group-hover:rotate-45
                      group-hover:text-[#B5121B]
                    "
                  />

                </div>

              </div>

            </a>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default WorkSection;