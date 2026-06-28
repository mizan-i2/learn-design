import CtaBanner from "@/components/CtaBanner";
import ExploreBlocks from "@/components/ExploreBlocks";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section home-intro">
        <div className="container home-intro-inner">
          <p>
            We are a steel detailing and BIM team helping fabricators, engineers, and contractors
            deliver accurate shop drawings and coordinated models—on time and to your standards.
          </p>
        </div>
      </section>

      <ExploreBlocks />

      <CtaBanner
        title="It's in the detail"
        description="Bridges to bus stations. Hospitals to high-rises. Mines to materials handling—or anything in between. Let Precision Steel Detailing Services handle the details."
        buttonText="Start a Conversation"
      />
    </>
  );
}
