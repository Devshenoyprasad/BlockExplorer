import React from "react";
import { BlockCounter } from "./blockcounter";
import { ChainInfo } from "./chaininfo";
import "./index.css";
import logo from "./ethereum.png";
export const Topbar = () => {
  return (
    <div className={"Topbar"}>
      <h1
        style={{
          fontFamily: "Padyakke Expanded One",
          fontSize: "80px",
          fontWeight: "700",
          margin: "10px 0 0 0",
          padding: "0",
          color: "black",
          backgroundColor: "beige",
        }}
      >
        0xEth_Explorer.eth
      </h1>
      <div>
        <div>
          <div
            style={{
              borderRadius: "0 45px 45px 0",
              padding: "0 0 0 20px",
              boxShadow: "  5px 5px 7px gray",
            }}
          >
            <p>
              Welcome to 0xEth_Explorer.eth<br></br>
              BlockChain is one of the most disrupting technology of the 21st
              century. There are multiple chain available but Ethereum is by far
              the most trusted and its mission is highly ambitous. We can just
              imagine its adoptibility by the fact that every 12 seconds a new
              block is added to the Chain.
              <br></br>
              With 0xEth_Explorer.eth we can explore the Ethereum Chain.
              <br></br>
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <BlockCounter></BlockCounter>
          <ChainInfo></ChainInfo>
        </div>
        <div
          style={{
            borderRadius: "0 0 0 100px",
            boxShadow: "none",
            backgroundColor: "beige",
            height: "550px",
          }}
        >
          <img src={logo} alt="Eth-Logo" />
        </div>
      </div>
    </div>
  );
};
