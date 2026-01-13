import FeaturesSection from "../component/featureSection";
import Footer from "../component/footer";
import Header from "../component/header";
import Hero from "../component/hero";
import BackgroundLayout from "../layout/backgroundLayout";

const LandingPage = () => {
  return (
    <BackgroundLayout>
      <Header />
      <Hero />
      <FeaturesSection />
      <Footer />
    </BackgroundLayout>
  );
};

export default LandingPage;
