import { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const UploadPhotoForm = ({ handleNext }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Create a preview URL
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
  };

  const handleUpload = () => {
    if (file) {
      handleNext(file); // Move to the next step with the selected file
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
        Add your first photo
      </Typography>
      <Typography variant="body1" sx={{ color: "#B3B3B3", mb: 4 }}>
        Be yourself, you are amazing!
      </Typography>

      <Box
        sx={{
          width: 120,
          height: 120,
          backgroundColor: "#333",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          cursor: "pointer",
          overflow: "hidden", // Ensures image fits inside the box
        }}
        component="label" // This turns the box into a file input label
        htmlFor="upload-photo" // Linking to the file input
      >
        <input
          id="upload-photo"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*" // Only accept image files
        />
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <AddIcon sx={{ fontSize: 40, color: "white" }} />
        )}
      </Box>

      {file && (
        <Button
          onClick={handleUpload}
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#f53b3b",
            color: "white",
            fontWeight: "bold",
            borderRadius: "24px",
            padding: "12px 24px",
            "&:hover": {
              backgroundColor: "#ff4c4c",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          Next
          <ArrowForwardIosIcon sx={{ ml: 1 }} />
        </Button>
      )}
    </Box>
  );
};

export default UploadPhotoForm;


