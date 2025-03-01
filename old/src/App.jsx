import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
