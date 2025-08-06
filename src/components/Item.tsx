import { memo } from "react";
import { ItemProps } from "../types/types";

const Item = ({ boxer, isSelected, onClick, id }: ItemProps) => {
  return (
    <div
      onClick={() => onClick(id)}
      style={{
        width: "20vh",
        minWidth: "100px",
        border: isSelected ? "2px solid #17b15cff " : "2px solid #2f302fff",
        padding: "10px",

        cursor: "pointer",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 5 }}>{boxer.name}</h3>
      <p style={{ margin: "0px", paddingBottom: 2.5 }}>
        Division: {boxer.division}
      </p>
      <p style={{ margin: "0px", paddingBottom: 2.5 }}>
        Win: <strong>{boxer.win} </strong>Loss: <strong>{boxer.loss} </strong>
        KOs: <strong>{boxer.kos}</strong>{" "}
      </p>
      <p style={{ margin: "0px", paddingBottom: 2.5 }}>
        Total matches: <strong>{boxer.fights}</strong>
      </p>
    </div>
  );
};

export default memo(Item);
