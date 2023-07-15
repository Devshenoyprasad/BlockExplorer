import React from "react";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import "./index.css";
import { BlockDisplayer } from "./blockdisplayer";
import { AccountDisplayer } from "./accountdisplayer";
import { TransactionDisplayer } from "./transactiondisplayer";

const settings = {
  apiKey: "2q-tCtmMopHYDSl448x1WGsy22q28LEW",
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);
export const Core = () => {
  const [isSearchTransaction, setIsSearchTransaction] = useState(false);
  const [isSearchAccount, setIsSearchAccount] = useState(false);
  const [isSearchBlock, setIsSearchBlock] = useState(false);
  const [Accountcred, setAccountcred] = useState();
  const [Blockcred, setBlockcred] = useState();
  const [Transactioncred, setTransactioncred] = useState();
  const [input, setinput] = useState("");
  return (
    <div
      className={"core"}
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        padding: "40px 0 0 0",
        height: "700px",
      }}
    >
      <div
        className={"formsection"}
        style={{
          display: "flex",
          width: "50%",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundColor: "beige",
          borderRadius: "0 100px 100px 0",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSearchBlock(true);
            setIsSearchTransaction(false);
            setIsSearchAccount(false);
            setinput(Blockcred);
            console.log("requestMade");
          }}
        >
          <label htmlFor="firstName">SEARCH BLOCK </label>

          <div>
            <input
              type="text"
              id="firstName"
              value={Blockcred}
              onChange={(e) => setBlockcred(e.target.value)}
            />
            <button type="submit">SEARCH</button>
          </div>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSearchBlock(false);
            setIsSearchTransaction(false);
            setIsSearchAccount(true);
          }}
        >
          <label htmlFor="firstName">SEARCH ACCOUNT </label>

          <div>
            <input
              type="text"
              id="firstName"
              value={Accountcred}
              onChange={(e) => setAccountcred(e.target.value)}
            />
            <button type="submit">SEARCH</button>
          </div>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSearchBlock(false);
            setIsSearchTransaction(true);
            setIsSearchAccount(false);
            setinput(Transactioncred);
            console.log("requestMade");
          }}
        >
          <label htmlFor="firstName">SEARCH TRANSACTION </label>

          <div>
            <input
              type="text"
              id="firstName"
              value={Transactioncred}
              onChange={(e) => setTransactioncred(e.target.value)}
            />
            <button type="submit">SEARCH</button>
          </div>
        </form>
      </div>
      <div
        style={{
          width: "50%",
          padding: "30px 20px 0 70px",
        }}
      >
        {isSearchBlock && <BlockDisplayer props={input}></BlockDisplayer>}
        {isSearchTransaction && (
          <TransactionDisplayer props={input}></TransactionDisplayer>
        )}
      </div>
    </div>
  );
};
