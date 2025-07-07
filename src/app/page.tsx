import ContactFooter from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HomePage from "./components/homepage";
import MainContent from "./components/main-content";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <MainContent />
      <ContactFooter />
    </div>
  );
}
