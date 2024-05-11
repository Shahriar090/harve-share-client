import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://harve-share-anqmsnp0d-shahriar090s-projects.vercel.app/api/v1",
  }),
  tagTypes: ["supply"],
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    getSupplyById: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    createSupply: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["supply"],
    }),
    getPosts: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    getSinglePost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    updatePost: builder.mutation({
      query: (updatedPost) => {
        return {
          url: `/posts/${updatedPost.id}`,
          method: "PUT",
          body: updatedPost.data,
        };
      },
      invalidatesTags: ["supply"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useGetSupplyByIdQuery,
  useCreateSupplyMutation,
  useGetPostsQuery,
  useGetSinglePostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
} = baseApi;
