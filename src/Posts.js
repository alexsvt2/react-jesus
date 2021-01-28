import React, { useEffect, useState } from "react";

function Posts() {
  const [postList, setPostList] = useState([]);
  //   const getPostsWithThen = () => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => response.json())
  //       .then((json) => console.log(json))
  //       .catch((error) => console.error(error))
  //   };

  const getPosts = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/");
      let data = await response.json();
      setPostList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("Se Ejecuto Use Effect al Entrar a la Pagina");

    getPosts();

    return () => {
      console.log("Se salio de la pagina");
    };
  }, []);

  return (
    <>
      {/* {postList && postList.map((post) => {
          return <li>Hello {post.title}</li>
      })} */}

      {postList.length > 0 ? (
        postList.map((post) => {
          return <h1>{post.title}</h1>;
        })
      ) : (
        <h1>Cargando</h1>
      )}

      {/* {postList.map((post) => {
        return <li>Hello {post.title}</li>;
      })} */}
    </>
  );
}

export default Posts;
