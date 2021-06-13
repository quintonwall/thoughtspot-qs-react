import logo from './logo.svg';
import './App.css';
import { init, AuthType, SearchEmbed } from "@thoughtspot/visual-embed-sdk";
import { Search } from "./SearchReact";



init({
  thoughtSpotHost: "https://try.thoughtspot.cloud", 
  authType: AuthType.None 
});


export default function App() {
  return (
    <div className="App">
      <h1>Hello ThoughtSpot Everywhere</h1>
      <p>This is a simple demo embedding ThoughSpot Search in a React App.</p>
     <SearchEmbed />
    </div>
  );
}

