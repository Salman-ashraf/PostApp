import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {Container,Typography,Box,TextField,Button,Avatar, MenuItem, Select } from "@mui/material/";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUsers } from "../user/userSlice";
import {  useNavigate } from "react-router-dom";


export default function AddPost() {

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const user = useSelector(selectAllUsers);
  // console.log(user)
  const [newpost, setNewpost] = React.useState({
    title: "",
    content: "",
    userId: "",
  });

  const handleChanges = (e) => {
    setNewpost((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = () => {
    dispatch(
      addNewPost({ title: newpost.title, body: newpost.content, userId:newpost.userId ,image:'https://picsum.photos/id/118/1500/1000'})
    );
    setNewpost({ title: "", content: "", userId: "" });
    navigate('/')
  };

  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PostAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Post
          </Typography>

          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
              value={newpost.title}
              onChange={handleChanges}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
              name="content"
              label="Content"
              value={newpost.content}
              onChange={handleChanges}
            />

            <Select
              fullWidth
              label="User"
              value={newpost.userId}
              onChange={(e) =>
                setNewpost((prev) => {
                  return { ...prev, userId: e.target.value };
                })
              }
            >
              {user.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}
            >
              Save Post
            </Button>
          </Box>
        </Box>
      </Container>
  
  );
}
