import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react"; // don't forget the /react for autogenerations of hooks
export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/" // indicate the url base of your API
    }),
    tagTypes: ["Messages"],
    endpoints: (builder) => ({
        getMessage: builder.query<any[], void>({
            query: () => "/get/messages/",
            providesTags: ["Messages"],
        }),
        getMessageById: builder.query<any[], void>({
            query: (id) => "/get/messages/" + id,
            providesTags: ["Messages"],
        }), // we will complete this part later in the article.
        sendMessage: builder.mutation({
            query: (data) => ({
              url: "/send/message",
              method: "POST",
              data: data,
            }),
            invalidatesTags: ["Messages"],      
          }),


    }) // we will complete this part later in the article.
});
export const { useGetMessageQuery ,useGetMessageByIdQuery,useSendMessageMutation} = api