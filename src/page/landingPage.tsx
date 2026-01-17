import Class from "../component/class";
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
      <Class />
      <Footer />
    </BackgroundLayout>
  );
};

export default LandingPage;
