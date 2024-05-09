import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),
    getSupplyById: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSuppliesQuery, useGetSupplyByIdQuery } = baseApi;
