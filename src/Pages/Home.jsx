import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/card";
import { homeBanner } from "../Data/BannerData";

function Home() {
  return (
    <main>
      <Banner {...homeBanner} />
      <Card />
    </main>
  );
}

export default Home;
