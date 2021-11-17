import ExpenseItem from "./components/ExpenseItem";
import NewExpenseItem from "./components/NewExpenseItem";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <div className="expenses">
        <NewExpenseItem></NewExpenseItem>
      </div>
    </div>
  );
}

export default App;
