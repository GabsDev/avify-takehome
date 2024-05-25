import React, {useCallback, useEffect, useState} from 'react';
import "./App.css"
import _ from "underscore";
import { PieChart } from '@mui/x-charts/PieChart';
import NavBar from "./components/NavBar/NavBar";
import {Box, Button, Container, Grid, IconButton, styled} from "@mui/material";
import {GenerationMix} from "./types";
import {getEnergyMix} from "./services/getEnergyMix";
import ListGeneration from "./components/ListGeneration/ListGeneration";
import GenerationPieChart from "./components/PieChart/GenerationPieChart";

interface AppState {
    GenMix: Array<GenerationMix>;
}
const MyButton = styled(Button, {})`
  color: white;
  background-color: #f48484;
  width: 175px;
  font-size: 10px;
  margin-left: 1px;
  margin-bottom: 1px;
  &:hover {
    background-color: #f55050;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

const App = () => {
    const [genMix, setGenMix] = useState<AppState["GenMix"]>([]);


    const handleSearchFromApi = useCallback((): void => {
        getEnergyMix().then(setGenMix);
    }, []);

    useEffect(() => {
        handleSearchFromApi()
    }, []);

    console.log(genMix)

    return (
        <>
            <NavBar/>
            <Box sx={{ marginTop: 15 }}>
                <Container maxWidth="xl">
                    <Grid container >
                        {!_.isEmpty(genMix) && (
                            <ListGeneration genMixes={genMix}/>
                        )}
                    </Grid>
                    <Grid container>
                        {!_.isEmpty(genMix) && (
                            // @ts-ignore
                            <GenerationPieChart genMixes={genMix}/>
                        )}
                    </Grid>
                </Container>
            </Box>
        </>)
}

export {
    App
}