import "./App.css";
import { HeaderContent, Header, Icon, Image } from 'semantic-ui-react'
import RoutesNav from "./components/Routes/routes";
function App() {
  return (
    <div className="main">
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <HeaderContent>Employee Management</HeaderContent>
        </Header>
      </div>
      <RoutesNav />
    </div>
  );
}

export default App;
