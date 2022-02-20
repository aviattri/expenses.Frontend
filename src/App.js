import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

const App = () => (
  <div style={{ width: "60%", margin: "auto" }}>
    <h3>New expenses</h3>
    <ExpenseForm />
    <hr style={{ border: `1 px solid` }} />
    <h3>Your expenses</h3>
    <ExpenseList />
  </div>
);

export default App;
