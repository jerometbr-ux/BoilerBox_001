import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ExecutiveSummary from "./components/ExecutiveSummary";
import FRCPTopics from "./components/FRCPTopics";
import ProductionApproach from "./components/ProductionApproach";
import VideoFormats from "./components/VideoFormats";
import ScopeAndTimeline from "./components/ScopeAndTimeline";
import Investment from "./components/Investment";
import Addons from "./components/Addons";
import Conclusion from "./components/Conclusion";

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Nav />
      <Hero />
      <ExecutiveSummary />
      <FRCPTopics />
      <ProductionApproach />
      <VideoFormats />
      <ScopeAndTimeline />
      <Investment />
      <Addons />
      <Conclusion />
    </div>
  );
}
