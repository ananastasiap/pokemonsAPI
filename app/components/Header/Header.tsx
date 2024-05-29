"use client";
import { Box, Grid } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <Grid
      container
      component="header"
      justifyContent="space-between"
      alignItems="center"
      sx={{ marginBottom: "54px", fontSize: "12px" }}
    >
      <Grid item sx={{ border: "solid 1px #fff", padding: "7px" }}>
        ПОКЕМОНЫ API
      </Grid>
      <Grid item>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box component="img" src="/cursor.png" />
          <Box component="p">
            Нажмите на
            <br />
            нужного покемона
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
