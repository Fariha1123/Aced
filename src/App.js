import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SwapCard from "./components/SwapCard";
import RecentTransactions from "./components/RecentTransactions";
import "./App.css";

const App = () => {
  return (
    <div
      className="min-h-screen p-4"
      style={{
        background: "#0a0f1d",
        color: "#e2e8f0",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Swap and Graph Side-by-Side */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <SwapCard />
              </div>
              <div className="flex-1">
                <RecentTransactions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;