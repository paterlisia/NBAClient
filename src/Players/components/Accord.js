import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography align={"right"} sx={{ width: "100%", flexShrink: 0 }}>
          GLOSSARY
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Box
            component="img"
            sx={{
              paddingLeft: "4%",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
            alt="The house from the offer."
            src={require("../static/glossary.png")}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
