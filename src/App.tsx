import React from "react";
import Interaction from "./Components/Interaction";
import MainNav from "./Components/MainNav";
import SubNav from "./Components/SubNav";

function App() {
  return (
    // 아래 div의 show-scene-N 바뀔때마다 scroll-section-N의 display가 block
    <div className="container" id="show-scene">
      <MainNav />
      <SubNav />
      <Interaction />
      <footer className="footer">2020 1분 코딩</footer>
    </div>
  );
}

export default App;
