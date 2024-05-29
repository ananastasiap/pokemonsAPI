"use client";
import Grid from "@mui/material/Grid";
import { Button } from "./containerComponents/Button";

export const MainContainer: React.FC = () => {
  return (
    <Grid
      container
      content="main"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button />
    </Grid>
  );
};
