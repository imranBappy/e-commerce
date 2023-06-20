import apiSlice from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ skip, limit }) => `/products?skip=${skip}&limit=${limit}`,
        }),
    })
})

export const { useGetProductsQuery } = productsApi;
