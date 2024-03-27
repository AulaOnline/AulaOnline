import React, {useState} from 'react';
import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide} from "@mui/material";
import axios from "axios";
import {API_URL} from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} timeout={{ enter: 800, exit: 800 }} />;
});

const ModalHistorico = ({videoLink, userID}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [annotation, setAnnotation] = useState('');

    const handleOpen = () => {
        setOpen(true);
        fetchDados(videoLink, userID);
        setLoading(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fetchDados = async (videoLink, userID) => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/annotation/getNotation/${userID}`, {
                videoLink: videoLink
            });
            setAnnotation(response.data.data.body);
        } catch (error) {
            return error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button size="large" variant="contained" onClick={handleOpen} sx={{ marginTop: 2 }}>Meu Histórico</Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
                maxWidth="md"
                fullWidth={true}
            >
                <DialogTitle>Sobre esse Video</DialogTitle>
                <DialogContent>
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <Grid container>
                            <h3>Suas Anotações</h3>
                            <Grid item md={12} sx={{
                                padding: '10px',
                                backgroundColor: "#f5f5f5",
                                height: '20vh',
                                border: '1px solid #017bf7'
                            }}>
                                {annotation ? <p>{annotation}</p> : <p>Você Ainda Não fez Anotações.</p>}
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error" variant="contained">
                        x
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ModalHistorico;
