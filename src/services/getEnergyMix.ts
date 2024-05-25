import axios from "axios";
import { GenerationMix, ResponseFromApi } from "../types";
import React from "react";

export const getEnergyMix = (
) => {
    return fetchGenMix()
};
const fetchGenMix = async (
): Promise<ResponseFromApi> => {
    const response = await axios.get("https://api.carbonintensity.org.uk/generation");
    console.log(response.data.data.generationmix);
    return response.data.data.generationmix;
};
