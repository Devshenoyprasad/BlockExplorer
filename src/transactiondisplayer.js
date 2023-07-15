import React from "react";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import "./index.css";
const settings = {
  apiKey: "2q-tCtmMopHYDSl448x1WGsy22q28LEW",
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);
export const TransactionDisplayer = (props) => {
  console.log(props);
  const [output, setOutput] = useState("");
  useEffect(() => {
    async function getOutput() {
      if (props.props) {
        console.log("Hare Krishna");
        setOutput(await alchemy.core.getTransaction(props.props));
      }
    }
    getOutput();
  }, [props.props]);
  if (output)
    return (
      <div className={"coredisplay"}>
        <div>
          {" "}
          <p className={"heading"}>HASH</p>
          <p>{output.hash}</p>
        </div>
        <div>
          <p className={"heading"}>FROM</p>
          <p>{output.from}</p>
        </div>
        <div>
          <p className={"heading"}>TO</p>
          <p>{output.to}</p>
        </div>
        <div>
          <p className={"heading"}>BLOCK HASH</p>
          <p>{output.blockHash}</p>
        </div>
        <div className={"type1"}>
          <div>
            <p className={"heading"}>BLOCK NUMBER</p>
            <p>{output.blockNumber}</p>
          </div>
          <div>
            <p className={"heading"}>CONFIRMATIONS</p>
            <p>{output.confirmations}</p>
          </div>
        </div>
        <div className={"type1"}>
          <div>
            <p className={"heading"}>VALUE</p>
            <p>{parseInt(parseInt(output.value._hex) / 1000000000)} Gwei</p>
          </div>
          <div>
            <p className={"heading"}>TRANSACTION INDEX</p>
            <p>{output.transactionIndex}</p>
          </div>
        </div>
        <div className={"type1"}>
          <div>
            <p className={"heading"}>GAS LIMIT</p>
            <p>{parseInt(output.gasLimit._hex)}</p>
          </div>
          <div>
            <p className={"heading"}>GAS PRICE</p>
            <p>{parseInt(output.gasPrice._hex)} Wei</p>
          </div>
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
