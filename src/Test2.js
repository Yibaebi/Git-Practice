import React from "react";

function Test2({ ninjas, sortValue, deleteNinja }) {
  const displayNinja = ninjas
    .sort((a, b) => b.age - a.age)
    .map((ninja) => (
      <div key={ninja.id}>
        <article>Name: {ninja.name}</article>
        <article>Age: {ninja.age}</article>
        <article>Belt: {ninja.belt} </article>
        <button onClick = {() => deleteNinja(ninja.id)}>Delete Ninja</button>
        <br></br>
      </div>
    ));

  return <div className="app">{displayNinja}</div>;
}

export default Test2;
