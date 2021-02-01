import "./App.css";
import Logo from "./components/Logo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomeScreen from './screens/HomeScreen'

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Logo />
        <HomeScreen />
      </div>
    </ApolloProvider>
  );
};

export default App;
