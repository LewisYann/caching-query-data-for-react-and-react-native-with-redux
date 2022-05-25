import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"; // don't forget the /react for autogenerations of hooks
export const api = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/" // indicate the url base of your API
    }),
    endpoints: (builder) => ({}) // we will complete this part later in the article.
});