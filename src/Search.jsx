import React from "react";
import { SearchEmbed, init, EmbedEvent } from "@thoughtspot/visual-embed-sdk";
import { Spin } from "antd";
import 'antd/es/spin/style/css';

export const Search = () => {
const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
   const tsSearch = new SearchEmbed("#tse", {
    
     frameParams: {
       width: "100%",
       height: "800px",
     },
     dataSources: ["cd252e5c-b552-49a8-821d-3eadaa049cca"],
     hideDataSources: true,
     searchQuery: "Sales this month",
   });
   tsSearch
   .on(EmbedEvent.Init, () => setIsLoading(true))
   .on(EmbedEvent.Load, () => setIsLoading(false))

   tsSearch.render();
 }, []);
  return (
   <>
     {isLoading ? (
       <div>
         <Spin size="large" />
      
       </div>
     ) : (
       ""
     )}
     <div className="TSEmbed" id="tse"></div>
   </>
 );
}