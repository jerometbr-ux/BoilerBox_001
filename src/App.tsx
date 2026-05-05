import Nav from "./components/Nav";
import BoilerBoxHero from "./components/BoilerBoxHero";
import Interactive3DBox from "./components/Interactive3DBox";
import BoilerBoxFeatures from "./components/BoilerBoxFeatures";
import BoilerBoxPackages from "./components/BoilerBoxPackages";
import BoilerBoxDeployments from "./components/BoilerBoxDeployments";
import Conclusion from "./components/Conclusion";

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Nav />
      <BoilerBoxHero />
      <Interactive3DBox />
      <BoilerBoxFeatures />
      <BoilerBoxPackages />
      <BoilerBoxDeployments />
      <Conclusion />
    </div>
  );
}
