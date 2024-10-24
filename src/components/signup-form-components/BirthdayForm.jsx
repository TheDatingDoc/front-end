import { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BirthdayForm = ({ formData, handleChange, handleNext, handleBack }) => {
  const [birthday, setBirthday] = useState({
    month: "",
    day: "",
    year: "",
  });

  const handleInputChange = (e) => {
    setBirthday({ ...birthday, [e.target.name]: e.target.value });
    handleChange(e); // updating the formData in the parent state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthday.month && birthday.day && birthday.year) {
      handleNext(); // proceed to the next step
    } else {
      alert("Please complete all fields.");
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
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        When is your birthday?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TextField
          label="Month"
          name="month"
          value={birthday.month}
          onChange={handleInputChange}
          required
          variant="outlined"
          placeholder="MM"
          InputLabelProps={{ shrink: true }}
          sx={{
            width: "100px",
            mr: 2,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#333",
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
          }}
        />
        <TextField
          label="Day"
          name="day"
          value={birthday.day}
          onChange={handleInputChange}
          required
          variant="outlined"
          placeholder="DD"
          InputLabelProps={{ shrink: true }}
          sx={{
            width: "100px",
            mr: 2,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#333",
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
          }}
        />
        <TextField
          label="Year"
          name="year"
          value={birthday.year}
          onChange={handleInputChange}
          required
          variant="outlined"
          placeholder="YYYY"
          InputLabelProps={{ shrink: true }}
          sx={{
            width: "150px",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#333",
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
          }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <VisibilityIcon sx={{ color: "white", mr: 1 }} />
        <Typography variant="body2">You won’t be able to change it later.</Typography>
      </Box>

      <IconButton
        onClick={handleSubmit}
        sx={{
          backgroundColor: "#f53b3b",
          color: "white",
          fontSize: "24px",
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

export default BirthdayForm;


