import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          GPGames PlayedMINMinutes PlayedPTSPointsFGMField Goals MadeFGAField
          Goals AttemptedFG%Field Goal Percentage3PM3 Point Field Goals Made3PA3
          Point Field Goals Attempted3P%3 Point Field Goal PercentageFTMFree
          Throws MadeFTAFree Throws AttemptedFT%Free Throw
          PercentageOREBOffensive ReboundsDREBDefensive
          ReboundsREBReboundsASTAssistsTOVTurnoversSTLStealsBLKBlocksPFPersonal
          FoulsFPFantasy PointsDD2Double DoublesTD3Triple Doubles+/-Plus-Minus
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
