import React, { ReactNode, useState } from "react";

const Main = () => {
  const [play, setPlay] = useState("0");
  const [mainbg, setMainbg] = useState("black");

  const dice = () => {
    const listofnums = ["1", "2", "3", "4", "5", "6"];
    const index = Math.floor(Math.random() * listofnums.length);
    return listofnums[index];
  };

  const handleplay = (e: any) => {
    const listofcolour = [
      "red",
      "green",
      "blue",
      "yellow",
      "purple",
      "orange",
      "violet",
    ];
    const randcol = Math.floor(Math.random() * listofcolour.length);
    setMainbg(
      (e.view.window.document.all[17].style.backgroundColor =
        listofcolour[randcol])
    );
    setPlay(dice());
  };
  const handlerefresh = (e: any) => {
    setPlay("0");
    setMainbg((e.view.window.document.all[17].style.backgroundColor = "white"));
  };

  return (
    <main style={{ minHeight: "80vh", backgroundColor: mainbg }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        {/* circle */}
        <div
          className="btn"
          style={{
            backgroundColor: "cyan",
            width: "200px",
            minHeight: "200px",
            textAlign: "center",
            borderRadius: "50%",
            boxShadow: "5px 5px 5px",
          }}
        >
          <h1 style={{ paddingTop: "60px" }}>{play}</h1>
        </div>
        {/* action */}
        <div className="" style={{ paddingTop: "10px" }}>
          {/* refresh */}
          <button
            className="refresh"
            style={{
              backgroundColor: "cyan",
              width: "100px",
              textAlign: "center",
              display: "",
            }}
            onClick={(e) => {
              handlerefresh(e);
            }}
          >
            <h2 style={{ display: "inline", padding: "20px" }}>refresh</h2>
          </button>
          {/* play */}
          <button
            className="Play"
            style={{
              backgroundColor: "cyan",
              width: "100px",
              textAlign: "center",
              display: "",
              marginLeft: "5px",
            }}
            onClick={(e) => {
              handleplay(e);
            }}
          >
            <h2
              style={{ display: "inline", marginLeft: "15px", padding: "10px" }}
            >
              Play
            </h2>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
