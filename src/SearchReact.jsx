import { init } from '@thoughtspot/visual-embed-sdk';
import { SearchEmbed } from '@thoughtspot/visual-embed-sdk/react';

init({
    thoughtSpotHost: '<%=thoughtSpotHost%>',
    authType: AuthType.None,
});

const MyComponent = ({ dataSources }) => {
    const onCustomAction = (actionEvent) => {
        // Do something with actionEvent.
    };
    
    return <SearchEmbed dataSources={dataSources} onCustomAction={onCustomAction} />
}