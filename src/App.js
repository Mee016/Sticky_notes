import { useState } from "react";
import "./App.css";
import listNote from "./listNote.json";

function App() {
  const [list, setList] = useState(listNote);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const newList = listNote.filter((item) =>
      item.content
        .toLocaleUpperCase()
        .includes(e.target.value.toLocaleUpperCase())
    );
    setList(newList);
  };
  const deleteNote = (id) => {
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  };
  return (
    <div className="container">
      <div className="row pt-5">
        <h1 style={{ color: "red", marginLeft: 450 }}>STICKY NOTES</h1>
        <div className="col-12">
          <input
            value={searchValue}
            onChange={handleSearch}
            placeholder="Enter the key to Search..."
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="row pt-3">
        {list.map((item, index) => (
          <div key={index} className="col-4">
            <div
              className={`card mb-3 ${
                item.type === 1
                  ? "bg-primary"
                  : item.type === 2
                  ? "bg-warning"
                  : "bg-danger"
              }`}
            >
              <div className="card-header bg-transparent">
                {item.type === 1
                  ? "Can do"
                  : item.type === 2
                  ? "Could do"
                  : "Must do"}
              </div>
              <div className="card-body">
                <p className="card-text">{item.content}</p>
              </div>
              <div className="card-footer bg-transparent">
                <div style={{ display: "flex" }}>
                  <span>{item.time}</span>
                  <div style={{ marginLeft: "auto" }}>
                    <button>Edit</button>
                    <button onClick={() => deleteNote(item.id)}>Del</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-4">
          <div className="card mb-3">
            <div className="card-header bg-transparent">Add note</div>
            <div className="card-body">
              <select style={{ width: "100%" }}>
                <option value="">Choose Group Note</option>
                <option value={1}>Can do</option>
                <option value={2}>Could do</option>
                <option value={3}>Must do</option>
              </select>
              <textarea row={4} style={{ width: "100%" }} />
              <input style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
