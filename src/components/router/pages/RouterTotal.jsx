import TodoMj from "components/ux_mj/todolist/Todo";
import TodoSj from "components/ux_sj/todolist/Todo";
import TodoTh from "components/ux_th/todolist/Todo";

function RouterTotal(){
  return (
    <>
      <TodoTh />
      <TodoMj />
      <TodoSj />
    </>
  )
}
export default RouterTotal;