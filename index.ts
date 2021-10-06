import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/2';

interface Todo {
  title: string;
  id: number;
  completed: boolean;
}
axios.get<Todo>(url).then(res => {
  const todo = res.data;

  const title = todo.title;
  const id = todo.id;
  const completed = todo.completed;

  console.log(`
  id: ${id}
  title: ${title}
  completed: ${completed}`);
});
