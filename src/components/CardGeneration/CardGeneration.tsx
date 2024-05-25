import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GenerationMix } from "../../types";
import StyledComponents from "./styles";

const { MyButton, MyTypography } = StyledComponents;
interface Props {
    genMix: GenerationMix;
}
export default function CardGeneration(props: Props) {
    const { genMix } = props;
    return (
        <Box id="infoFuel">
            <Grid container>
                <Grid item md={6}>
                    <MyTypography variant="subtitle1">{genMix.fuel}</MyTypography>
                </Grid>
                <Grid item md={6}>
                    <MyTypography variant="subtitle1">{genMix.perc}</MyTypography>
                </Grid>
            </Grid>
            <hr />
        </Box>
    );
}
