import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  Grid,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LookingForForm = ({ formData, handleChange, handleNext }) => {
  const [lookingFor, setLookingFor] = useState(formData.lookingFor || []);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setLookingFor((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
    handleChange(e); // Call handleChange to update the formData in the parent
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lookingFor.length > 0) {
      handleNext(); // Proceed to the next step
    } else {
      alert("Please select at least one option.");
    }
  };

  const optionsList = [
    "Long Term / Marriage Minded",
    "Situationship to Long Term",
    "Situationship to Short Term",
    "Mutual FWB",
    "Social Connections",
    "Kink Friendly",
    "Test Trial / Returning to Dating",
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        What are you looking for?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        You can choose more than one answer.
      </Typography>

      <Grid container spacing={2} direction="column" alignItems="center">
        {optionsList.map((option) => (
          <Grid item xs={12} key={option}>
            <FormControlLabel
              control={
                <Checkbox
                  value={option}
                  checked={lookingFor.includes(option)}
                  onChange={handleCheckboxChange}
                  sx={{ color: "white", '&.Mui-checked': { color: "#f53b3b" } }}
                />
              }
              label={option}
              sx={{ color: "white" }}
            />
          </Grid>
        ))}
      </Grid>

      <IconButton
        onClick={handleSubmit}
        sx={{
          mt: 4,
          backgroundColor: "#f53b3b",
          color: "white",
          padding: "10px",
          "&:hover": {
            backgroundColor: "#ff4c4c",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default LookingForForm;


