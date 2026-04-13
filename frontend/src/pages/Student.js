import axios from "axios";
import { useState, useEffect } from "react";

function Student() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState();
  const [page, setPage] = useState(1);

  const perPage = 5;

  const last = page * perPage;
  const first = last - perPage;

  const filteredData = data.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase()),
  );

  const records = filteredData.slice(first, last);

  useEffect(() => {
    API.get("student/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const save = () => {
    let form = new FormData();

    form.append("name", name);
    form.append("age", age);
    form.append("course", course);
    form.append("photo", photo);
    axios.post("http://127.0.0.1:8000/api/student/", form);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="p-3">
        <h2>Students</h2>

        <div>
          <input onChange={(e) => setName(e.target.value)} placeholder="name" />
          <input onChange={(e) => setAge(e.target.value)} placeholder="age" />
          <input
            onChange={(e) => setCourse(e.target.value)}
            placeholder="course"
          />
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
          />
          <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
          <button onClick={() => setPage(page - 1)}>Prev</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
          <button onClick={save}>Save</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {records.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
