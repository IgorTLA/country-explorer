/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/services";
import { ApiResponseType } from "@/types/actions";
import { AxiosError } from "axios";
import { CountryType } from "./types";

export async function getCountries(name?: string) {
  const fields =
    "name,cca2,cca3,capital,region,subregion,population,area,flags";

  const url = name
    ? `/name/${encodeURIComponent(name)}?fields=${fields}`
    : `/all?fields=${fields}`;

  return await api
    .get(url)
    .then((response) => {
      const apiResponse: ApiResponseType<CountryType> = {
        message: "Countries fetched successfully",
        status: 200,
        data: response.data,
      };
      return apiResponse;
    })
    .catch((error: AxiosError) => {
      if (!error.response) {
        return {
          message: "Error connecting to server",
          status: 500,
          data: null,
        } as ApiResponseType<any>;
      }

      const apiResponse = error.response.data as any;
      const errorData = apiResponse.message as ApiResponseType<any>;

      return {
        message: errorData.message,
        status: errorData.status,
        data: null,
      } as ApiResponseType<any>;
    });
}

export async function getCountryByCode(
  code: string
): Promise<ApiResponseType<CountryType>> {
  const fields =
    "name,flags,capital,region,subregion,population,area,languages";
  const url = `/alpha/${code}?fields=${fields}`;

  return await api
    .get(url)
    .then((response) => {
      const apiResponse: ApiResponseType<CountryType> = {
        message: "Country fetched successfully",
        status: 200,
        data: response.data,
      };
      return apiResponse;
    })
    .catch((error: AxiosError) => {
      if (!error.response) {
        return {
          message: "Error connecting to server",
          status: 500,
          data: null,
        } as ApiResponseType<any>;
      }
      const apiResponse = error.response.data as any;
      const errorData = apiResponse.message as ApiResponseType<any>;

      return {
        message: errorData.message,
        status: errorData.status,
        data: null,
      } as ApiResponseType<any>;
    });
}
