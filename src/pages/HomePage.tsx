import { useState, useCallback } from "react";
import Item from "../components/Item";

import { boxersList } from "../data/data";

const HomePage = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = useCallback((name: number) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  }, []);

  return (
    <div>
      <h1>
        Vybraní boxeři: {selected.map((i) => boxersList[i]?.name).join(", ")}
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {boxersList.map((boxer, index) => (
          <Item
            key={index}
            boxer={boxer}
            isSelected={selected.includes(index)}
            onClick={handleSelect}
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
