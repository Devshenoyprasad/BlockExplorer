import React from "react";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import "./index.css";
const settings = {
  apiKey: "2q-tCtmMopHYDSl448x1WGsy22q28LEW",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);
export const BlockDisplayer = (props) => {
  console.log(props);
  const [output, setOutput] = useState("");
  useEffect(() => {
    async function getOutput() {
      if (props.props) {
        console.log("Hare Krishna");
        setOutput(await alchemy.core.getBlock(props.props));
      }
    }
    getOutput();
  }, [props.props]);
  if (output)
    return (
      <div className={"coredisplay"}>
        <div>
          <p className={"heading"}>HASH</p>
          <p>{output.hash}</p>
        </div>
        <div>
          <p className={"heading"}>PARENT HASH</p>
          <p>{output.parentHash}</p>
        </div>
        <div className={"type1"}>
          <div>
            <p className={"heading"}>BLOCK NUMBER</p>
            <p>{output.number}</p>
          </div>
          <div>
            <p className={"heading"}>TIMESTAMP</p>
            <p>{output.timestamp}</p>
          </div>
        </div>
        <div className={"type1"}>
          <div>
            <p className={"heading"}>GAS LIMIT</p>
            <p>{parseInt(output.gasLimit._hex)} </p>
          </div>
          <div>
            <p className={"heading"}>GAS USED</p>
            <p>{parseInt(output.gasUsed._hex)} </p>
          </div>
        </div>
        <div>
          <p className={"heading"}>TRANSACTION</p>
          <p>{output.transactions.length}</p>
        </div>
        <div>
          <p className={"heading"}>MINER</p>
          <p>{output.miner}</p>
        </div>
      </div>
    );
  else
    return (
      <p style={{ color: "white", fontSize: "30px" }}>
        {" "}
        Credentials do not exist. Please verify.
      </p>
    );
};
