import { Grid } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import Editor from "../Layout/features/Notepad/Notepad";



const StyledSection = styled.section`
  background-color: #101824;
  background-size: 3000px 3000px;
  height: 100vh; /* Definindo a altura para preencher 100% da viewport */
`;

function Test() {
    return (
        <StyledSection>
            <Grid container md={8} sx={{display:'flex', alignItems:'center', justifyContent:'Center'}}>
                <Grid Item sx = {{marginTop: '50px'}}>
                    <Editor/>
                </Grid>
            </Grid>
        </StyledSection>
    );
}

export default Test;
