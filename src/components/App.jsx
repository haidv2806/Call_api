import React, {useState, useEffect} from "react";
import Card from "./Card";
import axios from "axios";




function renderCard(data) {
  var fullName = data.name.title + " " + data.name.first + " " + data.name.last
  return (
    <Card
      key={data.id.value}
      name={fullName}
      img={data.picture.thumbnail}
      userName={data.login.username}
    />
  );
}

function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10")
      .then(response => {
        // Xử lý dữ liệu thành công
        let data = response.data.results;
        setData(data);
      })
      .catch(error => {
        // Xử lý lỗi
        console.error("Có lỗi xảy ra khi lấy dữ liệu:", error);
      });
  }, []);

  console.log(data);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {data.map(renderCard)}
    </div>
  );
}

export default App;
