import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarOutline sx={{ color: "icon.main", fontSize: 100 }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Seleccione una Entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
