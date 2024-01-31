import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  TextField,
  Snackbar,
  Alert
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={{ enter: 800, exit: 800 }} />;
});

const EsqueciMinhaSenha = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Verificar se o campo de e-mail está preenchido
    if (email.trim() === '') {
      setErrorSnackbar(true);
      return;
    }

    // Lógica para enviar a nova senha por e-mail

    setTimeout(() => {
      // Exibir Snackbar de sucesso
      setSuccessSnackbar(true);
      handleClose();
    }, 1000);
  };

  const handleSnackbarClose = () => {
    setErrorSnackbar(false);
    setSuccessSnackbar(false);
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary" sx={{paddingBottom:'10px'}}>
        Esqueci minha senha
      </Button>
      <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
        <DialogTitle>Recuperação de Senha</DialogTitle>
        <DialogContent>
          <TextField
            label="E-mail"
            type="email"
            value={email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Enviar Nova Senha
          </Button>
          <Button onClick={handleClose} color="error" variant="contained">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={errorSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Por favor, insira um endereço de e-mail válido.
        </Alert>
      </Snackbar>
      <Snackbar open={successSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Nova senha enviada com sucesso! Verifique seu e-mail.
        </Alert>
      </Snackbar>
    </>
  );
};

export default EsqueciMinhaSenha;
