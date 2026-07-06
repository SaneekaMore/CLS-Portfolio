import Container from "../ui/Container";

function AboutSection() {
  return (
    <section
      id="about"
      className="py-40 bg-[#050505]"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.45em] text-sm text-gray-500 mb-5">
              WHO WE ARE
            </p>

            <h2
              className="
              font-['Syne']
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-[0.95]
              tracking-[-0.04em]
              mb-10"
            >
              Stories Worth
              <br />
              Remembering.
            </h2>

            <p className="text-lg leading-5 text-gray-300 mb-2">
              At CL Studios, we believe every brand has a story worth telling.
              Ours just happens to involve cameras, coffee, countless retakes,
              and the occasional <span className="italic">"one last shot"</span>
              that somehow turns into twenty more.
            </p>

            <p className="text-lg leading-4 text-gray-400">
              We blend storytelling, strategy, and cinematic execution to
              create content that feels human. Whether it's a brand film,
              commercial, corporate film, or social media campaign, we create
              visuals that connect, inspire, and stay with people long after
              they've watched.
            </p>

            <p className="mt-10 text-2xl font-semibold text-white">
              Good content gets views.
              <br />
              Great stories get remembered.
            </p>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-sm">

              <h3 className="text-5xl font-bold mb-4">3+</h3>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
                Years Creating Stories
              </p>

            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-sm">

              <h3 className="text-3xl font-bold mb-4">
                Pune
              </h3>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
                Based Studio
              </p>

            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-sm">

              <h3 className="text-3xl font-bold mb-4">
                India
              </h3>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
                Available Nationwide
              </p>

            </div>

            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-sm">

              <h3 className="text-3xl font-bold mb-4">
                End-to-End
              </h3>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
                Creative Production
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default AboutSection;