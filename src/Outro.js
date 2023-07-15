import React from "react";
export const Outro = () => {
  return (
    <div className={"outro"}>
      <div style={{ width: "30%" }}></div>
      <div
        style={{
          backgroundColor: "black",
          width: "20%",
          padding: "50px 150px 30px 150px",
        }}
      >
        <p style={{ opacity: "0.75" }}>PROJECT BY:</p>
        <p>PRASAD DEVADAS SHENOY</p>
        <a style={{ textDecoration: "none", fontSize: "17px" }}>
          www.Devprasadshenoy.github.io
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "black",
            justifyContent: "space-between",
            borderRadius: "0",
            textAlign: "left",
            padding: "50px 100px 10px 0",
          }}
        >
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-github"></a>
        </div>
        <a style={{ fontSize: "17px" }}>shenoyprasad24@gmail.com</a>
        <a>+91 9322389064</a>
      </div>
    </div>
  );
};
