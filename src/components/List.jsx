import React from "react";
import {
  Typography,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

function List() {
  const data = [
    {
      id: "0001",
      title: "Map of Africa",
      category: "Cartography",
      text: "This map includes information about travel.",
    },
    {
      id: "0002",
      title: "Letters to Petermann",
      category: "Manuscripts",
      text: "These are letters from others to Petermann.",
    },
    {
      id: "0003",
      title: "Northeast Passage",
      category: "Prints",
      text: "Travel report from the Arctic.",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "20px",
          justifyContent: "center",
        }}
      >
        {data.map((element) => {
          return (
            <Card
              sx={{ width: 250, margin: "0.5rem", backgroundColor: "#eee" }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {element.id}
                </Typography>
                <Typography variant="h5" component="div">
                  {element.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {element.category}
                </Typography>
                <Typography variant="body2">{element.text}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
}

export default List;
