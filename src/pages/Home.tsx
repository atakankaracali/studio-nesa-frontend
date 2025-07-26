import Hero from "../components/Hero";
import "../styles/home.css";
import Divider from "../components/Divider";
import BackgroundGlow from "../components/BackgroundGlow";

const Home = () => {
  return (
    <>
      <BackgroundGlow />
      <div className="home-container">
        <Divider icon="" text="🌿V🌿" />
        <main className="home-section">
          <Hero />
        </main>
        <Divider icon="" text="🌿V🌿" />
      </div>
    </>
  );
};

export default Home;
