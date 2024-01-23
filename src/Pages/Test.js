import EditorWrapper from "../Layout/features/Notepad/Notepad";
import Editor from "../Layout/features/Notepad/Notepad";
import {Grid } from "@mui/material";
import React from "react";
import {styled} from "styled-components";

const StyledSection = styled.section`
  background-color: #101824;
  background-size: 3000px 3000px;
`;


function Test() {
    return (
        <StyledSection>
            <Grid container sx={{border:'1px solid green', display:'flex', justifyContent: 'center', alignItems: 'center', height:'100vh'}}>
                <Editor/>
            </Grid>
        </StyledSection>
    );
}

export default Test;
