import * as React from "react";
import _ from "underscore";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {PieChart} from "@mui/x-charts/PieChart";
import {GenerationMix} from "../../types";
import {Container} from "@mui/material";

interface Props {
    genMixes: GenerationMix;
}

export default function GenerationPieChart(props: Props) {
    const {genMixes} = props;

    // @ts-ignore
    if (!_.isEmpty(genMixes) && genMixes.length > 0) {
        // @ts-ignore
        var pieData = genMixes.map((genMix, index) => {
            return (
                {
                    id: index,
                    value: genMix.perc,
                    label: genMix.fuel
                }
            );
        })
    }
    return (
        <Box id="pieChart">
            <Container>
                <Grid container>
                    <Grid item xs></Grid>
                    <Grid item xs={6} md={2}>
                        <PieChart
                            series={[
                                {
                                    data: pieData,
                                    innerRadius: 20,
                                    outerRadius: 156,
                                    paddingAngle: 3,
                                    cornerRadius: 3,
                                    startAngle: -122,
                                    endAngle: 242,
                                    cx: 150,
                                    cy: 150,

                                },
                            ]}
                            width={600}
                            height={350}
                        />
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>

            </Container>
        </Box>
    );
}
