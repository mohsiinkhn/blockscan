import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import BlockDetailsPage from "./pages/BlockDetailsPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";
import AddressDetailsPage from "./pages/AddressDetailsPage";
import { RecentDataProvider } from "./contexts/RecentDataContext";
import { FetchDataProvider } from "./contexts/FetchDataContext";

function App() {
  return (
    <div>
      <RecentDataProvider>
        <FetchDataProvider>
          <BrowserRouter>
            <NavBar />
            <HeroSection />
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="block/:blockNumber" element={<BlockDetailsPage />} />
              <Route
                path="transaction/:txnHash"
                element={<TransactionDetailsPage />}
              />
              <Route path="address/:address" element={<AddressDetailsPage />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </FetchDataProvider>
      </RecentDataProvider>
    </div>
  );
}

export default App;
