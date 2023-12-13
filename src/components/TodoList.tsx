import { useAppSelector } from "../store";

export function TodoList() {
  // useSelector - busca as informações do estado
  const todos = useAppSelector((store) => {
    return store.todo;
  });

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
