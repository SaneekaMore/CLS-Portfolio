import { Play } from "lucide-react";
import featuredReel from "../../data/featuredReel";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import demoReel from "../../assets/videos/hero/demo-reel.mp4";

function FeaturedReel() {
  return (
    <section
      id="featured-reel"
      className="py-20 md:py-28 lg:py-40 bg-[#050505]"
    >
      <Container>
        <SectionTitle
          label="Featured"
          title={featuredReel.title}
        />

        <div
          className="
            group
            relative
            mt-14
            overflow-hidden
            rounded-[32px]
            aspect-video
            border
            border-white/10
          "
        >
          <video
            src={demoReel}
            autoPlay
            muted
            loop
            playsInline
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                w-24
                h-24
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                transition-all
                duration-500
                group-hover:scale-110
              "
            >
              <Play
                size={34}
                fill="black"
                color="black"
              />
            </div>
          </div>
        </div>

        <p
          className="
            mt-12
            max-w-xl
            text-lg
            leading-9
            text-gray-400
          "
        >
          {featuredReel.description}
        </p>
      </Container>
    </section>
  );
}

export default FeaturedReel;