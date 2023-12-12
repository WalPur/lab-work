import MainPage from "./pages/main";
import HeaderWidget from "./widgets/header";

function App() {
  return (
    <>
      <HeaderWidget />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <MainPage />
    </>
  );
}

export default App;
