import React from "react";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import "./index.css";

const settings = {
  apiKey: "2q-tCtmMopHYDSl448x1WGsy22q28LEW",
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);
export const BlockCounter = () => {
  const [blockNumber, setBlockNumber] = useState(0);
  useEffect(async () => {
    setBlockNumber(await alchemy.core.getBlockNumber());
    setInterval(async () => {
      setBlockNumber(await alchemy.core.getBlockNumber());
      console.log("Hello");
    }, 100000);
  }, []);
  return (
    <div className={"BlockCounter"}>
      <p style={{ opacity: "0.75", margin: "0" }}>NUMBER OF BLOCK ON CHAIN</p>
      <p
        style={{
          fontFamily: "Padyakke Expanded One",
          fontSize: "80px",
          margin: "0",
        }}
      >
        <center>{blockNumber}</center>
      </p>
    </div>
  );
};
