import React from "react";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import "./index.css";
const settings = {
  apiKey: "2q-tCtmMopHYDSl448x1WGsy22q28LEW",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);
export const ChainInfo = () => {
  const [gasPrice, setGasPrice] = useState(0);
  const updateGasPrice = async () => {
    setGasPrice(parseInt((await alchemy.core.getGasPrice())._hex));
  };
  useEffect(() => {
    updateGasPrice();
    setInterval(() => updateGasPrice(), 100000);
  }, []);
  return (
    <div
      className={"Chaininfo"}
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "50%" }}>
        <p style={{ opacity: "0.75", fontSize: "15px", margin: "0" }}>
          CURRENT GAS PRICE
        </p>
        <p style={{ fontSize: "20px", margin: "0" }}>{gasPrice} wei</p>
      </div>
      <div style={{ width: "50%" }}>
        <p style={{ opacity: "0.75", fontSize: "15px", margin: "0" }}>
          CURRENT ETHEREUM CHAIN
        </p>
        <p style={{ fontSize: "20px", margin: "0" }}>ETHEREUM MAINNET</p>
      </div>
    </div>
  );
};
