import Navbar from "../../Layout/components/Navbar";
import { Grid, Paper, Typography } from "@mui/material";

function Questionario() {
    return (
        <Grid container>
            <Navbar/>

            <Grid container sx={{ display: "flex", height: "calc(100vh - 64px)", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <Paper elevation={5} sx={{ bgcolor:"blue", height:"80%", width:"50%" }}>
                    <Grid item>
                        <Grid item md={12}>
                            <Typography variant="h3">Questionario!!</Typography>
                        </Grid>
                    </Grid>
                </Paper>

            </Grid>
        </Grid>
    );
}

export default Questionario;