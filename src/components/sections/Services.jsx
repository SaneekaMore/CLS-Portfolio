import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";

const services = [
  "Brand Films",
  "Commercial Production",
  "Full Event Coverage",
  "Live Broadcasting",
  "Social Media Content",
  "Product Films",
  "Photography",
  "Corporate Films",
  "Drone Cinematography",
  "Creative Direction",
  "Post Production",
  "Content Strategy",
];

function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 lg:py-40 bg-[#050505]"
    >
      <Container>

        {/* Heading */}

        <div className="mb-24">

          <p className="uppercase tracking-[0.45em] text-sm text-gray-500 mb-5">
            SERVICES
          </p>

          <h2
            className="
            font-['Syne']
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-[0.95]
            tracking-[-0.04em]
            "
          >
            Everything You Need.
            <br />
            One Creative Studio.
          </h2>

        </div>

        {/* Services */}

        {services.map((service, index) => (

          <div
            key={service}
            className="
            group
            border-t
            border-white/10
            py-8
            cursor-pointer
            transition-all
            duration-500
            hover:border-red-500"
          >

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-8">

                <span
                  className="
                  text-gray-600
                  text-sm
                  tracking-[0.3em]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                  font-['Syne']
                  text-3xl
                  md:text-5xl
                  font-semibold
                  transition-all
                  duration-500
                  group-hover:text-red-500"
                >
                  {service}
                </h3>

              </div>

              <ArrowUpRight
                size={34}
                className="
                transition-all
                duration-500
                group-hover:rotate-45
                group-hover:text-red-500"
              />

            </div>

          </div>

        ))}

      </Container>
    </section>
  );
}

export default Services;