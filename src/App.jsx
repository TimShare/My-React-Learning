import { useState } from "react";
import Header from "./components/Header";
import TeachingSelection from "./components/TeachingSection";
import ButtonsSection from "./components/ButtonsSection";
import TabsSection from "./components/TabsSrction";
import FeedbackSection from "./components/FeedbackSection";
import IntroSection from "./components/IntroSection";
import "./index.css";
import EffectSection from "./components/EffectSection";

function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <div>
        <Header />
        <main>
          <IntroSection />
          <TabsSection active={tab} onChange={(current) => setTab(current)} />

          {tab == "main" && (
            <>
              <TeachingSelection />
              <ButtonsSection />
            </>
          )}
          {tab == "feedback" && <FeedbackSection />}

          {tab == "effect" && <EffectSection />}
        </main>
      </div>
    </>
  );
}

export default App;
