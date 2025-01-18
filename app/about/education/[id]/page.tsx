// app/about/education/[id]/page.tsx

"use client";  // This will ensure the page uses client-side rendering

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function EducationPage() {
  const { id } = useParams();
  const [todolist, setTodolist] = useState({title:"",name:"", email:""});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTodolist(data);  // Set fetched data
      });
  }, [id]);

  if (!todolist) {
    return <div>Loading...</div>;  // Show loading until data is fetched
  }

  return (
    <div>
        <h1>{id} - Courses</h1>
      <h1>{todolist.title}</h1>
      <p>This is the page for item {id}.</p>
      <p>Name: {todolist.name || 'N/A'}</p>
      <p>Email: {todolist.email || 'N/A'}</p>
    </div>
  );
}

export default EducationPage;
