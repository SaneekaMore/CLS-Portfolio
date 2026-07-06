import work from "../../data/work";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { ArrowUpRight } from "lucide-react";

function WorkSection() {
  return (
    <section
      id="work"
      className="py-40 bg-[#050505]"
    >
      <Container>
        <SectionTitle
          label="Selected Work"
          title="Featured Projects"
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {work.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#0b0b0b]
                transition-all
                duration-500
                hover:border-white/30
              "
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
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

              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                    {project.category}
                  </p>

                  <span className="text-gray-500 text-sm">
                    {project.year}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="font-['Syne'] text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="
                      transition-all
                      duration-500
                      group-hover:rotate-45
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