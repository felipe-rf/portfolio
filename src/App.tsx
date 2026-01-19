import Portfolio from "./pages/Porfolio";
import { Analytics } from "@vercel/analytics/next";
function App() {
  return (
    <>
      <Analytics />
      <Portfolio />
    </>
  );
}

export default App;
