import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { DICTIONARY } from "../../utils";
import { Dictionary } from "../dictionary";
import { Home } from "../Home_page";

export const Day = () => {
  const { id } = useParams();

  return (
    <div>
      <Home />
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
        {DICTIONARY[id].map((el) => (
          <Dictionary dictionary={el} key={el.id} />
        ))}
      </Box>
    </div>
  );
};
