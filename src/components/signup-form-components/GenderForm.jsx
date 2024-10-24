import { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const GenderForm = ({ formData, handleChange, handleNext }) => {
  const [gender, setGender] = useState(formData.gender || "");

  const handleInputChange = (e) => {
    setGender(e.target.value);
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gender) {
      handleNext();
    } else {
      alert("Please select a gender.");
    }
  };

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
        What's your gender?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Pick which best describes you.
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={gender}
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="Woman"
            control={<Radio sx={{ color: "white", '&.Mui-checked': { color: "#f53b3b" }}} />}
            label="Woman"
            sx={{
              backgroundColor: "#333",
              borderRadius: "8px",
              color: "white",
              mb: 2,
              padding: "10px",
              width: "200px",
              justifyContent: "space-between",
            }}
          />
          <FormControlLabel
            value="Man"
            control={<Radio sx={{ color: "white", '&.Mui-checked': { color: "#f53b3b" }}} />}
            label="Man"
            sx={{
              backgroundColor: "#333",
              borderRadius: "8px",
              color: "white",
              padding: "10px",
              width: "200px",
              justifyContent: "space-between",
            }}
          />
        </RadioGroup>
      </FormControl>

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

export default GenderForm;


