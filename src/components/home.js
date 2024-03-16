import { Button } from "semantic-ui-react";
import history from "./Routes/history";
export default function Home() {
  return (
    
      <form>
        <Button variant="btn btn-success" onClick={() => history.push("/read")}>
         Employees
        </Button>
      </form>

  );
}
