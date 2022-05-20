import React from "react";

export default function Header() {
  return (
    <div>
      <div className="level-container margin-top">
        <button className="btn easy-level easy-level-active">Easy</button>

        <button className="btn medium-level">Medium</button>

        <button className="btn hard-level">Hard</button>
      </div>
    </div>
  );
}
