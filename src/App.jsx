import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <BackToTop />

      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;