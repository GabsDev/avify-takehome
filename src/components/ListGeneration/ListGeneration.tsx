import * as React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import _ from "underscore";
import StyledComponents from "./styles";
import { GenerationMix } from "../../types";
import CardGeneration from "../CardGeneration/CardGeneration";
import { Paper } from "@mui/material";

const { MyAppBar, MyTypography } = StyledComponents;
interface Props {
    genMixes: Array<GenerationMix>;
}
export default function ListGeneration(props: Props) {
    const { genMixes } = props;
    return (
        <React.Fragment>
            <Container>
                <MyAppBar position="static">
                    <Toolbar>
                        <Grid container>
                            <Grid item md={6}>
                                <MyTypography variant="h6">Fuel</MyTypography>
                            </Grid>
                            <Grid item md={6}>
                                <MyTypography variant="h6">Percentage</MyTypography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </MyAppBar>
                <Paper variant="outlined" square>
                    {  !_.isEmpty(genMixes) && genMixes.length > 0 &&
                        genMixes.map((genMix, index) => {
                            return (
                                <div key={index + 1}>
                                    <CardGeneration genMix={genMix}  />
                                </div>
                            );
                        })}
                </Paper>
            </Container>
        </React.Fragment>
    );
}
