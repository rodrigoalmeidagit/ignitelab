import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ruwz2g1naq01z360bcfvi3/master',
    cache: new InMemoryCache(),
});
