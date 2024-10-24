import { useQuery } from "@apollo/client";
import { GET_USER } from "../../utils/queries"; 
import { useParams } from "react-router-dom"; 
import { Box, Typography, Avatar, Button, Grid } from "@mui/material";

const Profile = () => {
  const { id } = useParams(); 
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id }, // pass the user's ID to fetch data
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile.</p>;

  const user = data?.user;

  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={user.name}
          src={user.profileImage}
          sx={{ width: 100, height: 100 }}
        />
        <Box sx={{ marginLeft: "20px" }}>
          <Typography variant="h4">{user.name}, {user.age}</Typography>
          <Typography variant="h6">{user.jobTitle || 'Software Engineer'}</Typography>
          <Typography variant="body2">{user.city}, {user.state}</Typography>
        </Box>
      </Box>

      <Box mt={4}>
        <Typography variant="h5">About me</Typography>
        <Typography variant="body1">{user.bio || "Write about yourself here."}</Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h5">Looking for</Typography>
        <Typography variant="body1">{user.lookingFor}</Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h5">Interests and Hobbies</Typography>
        <Grid container spacing={2}>
          {user.interests?.map((interest) => (
            <Grid item key={interest}>
              <Button variant="outlined">{interest}</Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={4}>
        <Typography variant="h5">Photos</Typography>
        <Grid container spacing={2}>
          {user.additionalImages?.map((image, index) => (
            <Grid item key={index}>
              <img src={image} alt="Profile Image" width={100} height={100} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button variant="contained" sx={{ mt: 4 }}>
        Edit Profile
      </Button>
    </Box>
  );
};

export default Profile;
