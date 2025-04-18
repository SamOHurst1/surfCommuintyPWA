"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/navigation";

Amplify.configure(outputs);

const client = generateClient<Schema>();

// export default function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  // const { user, signOut } = useAuthenticator();
  // const [isModalOpen, setIsModalOpen] = useState(false);

//   function listTodos() {
//     client.models.Todo.observeQuery().subscribe({
//       next: (data) => setTodos([...data.items]),
//     });
//   }

//   useEffect(() => {
//     listTodos();
//   }, []);

//   function createTodo(content: string) {
//     client.models.Todo.create({ content });
//   }

//   function deleteTodo(id: string) {
//     client.models.Todo.delete({ id })
//   }

//   return (
//     <main>
//       <h1>{user?.signInDetails?.loginId}'s to-dos</h1>
//       <button onClick={() => setIsModalOpen(true)}>+ New</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
//             {todo.content}
//           </li>
//         ))}
//       </ul>
//       <div className="center-text">
//         Try creating a new to-do.
//         <br />
//         Click on a to-do to delete it.
//       </div>
//       <button onClick={signOut}>Sign out</button>
//     </main>
//   );
// }

export default function App() {
  const router = useRouter();
  const { user, signOut, route } = useAuthenticator();

  useEffect(() => {
    console.log(route);
    router.push('/'); // home screen
    // TODO: check if user has set up their profile
    if (route === 'signIn') {
    } else if (route === 'authenticated') {
      router.push('/profileSetup/name');
    }
  }, [route]);
  
  // Your existing return
  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s to-dos</h1>
    </main>
  );
}