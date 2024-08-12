import axios from "axios";
import type { LocationData } from "../types/LocationData.ts";

export const getGeoLocation = async (ip: string): Promise<LocationData> => {
  try {
    const response = await axios.get<LocationData>(
      `http://ip-api.com/json/${ip}`
    );
    return response.data;
  } catch (error) {
    console.error("erro:", (error as Error).message);
    return {};
  }
};
