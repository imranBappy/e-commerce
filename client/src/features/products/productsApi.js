import apiSlice from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ skip, limit }) => `/products?skip=${skip}&limit=${limit}`,
        }),
        // for more products
        getMoreProducts: builder.query({
            query: ({ skip, limit }) => `/products?skip=${skip}&_limit=${limit}`,
            async onQueryStarted({ limit }, { dispatch, queryFulfilled }) {
                try {
                    const data = await queryFulfilled;
                    if (data?.data?.products?.length > 0) {
                        console.log(`${limit}`);
                        dispatch(apiSlice.util.updateQueryData("getProducts", `${limit}`, (draft) => {
                            console.log(16, JSON.parse(JSON.stringify(draft.data)))
                            console.log("data", data?.data?.products)
                            // draft.data.
                            // draft.data.push(...data?.products);
                        }))
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    })
})

export const { useGetProductsQuery } = productsApi;
