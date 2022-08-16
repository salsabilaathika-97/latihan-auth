import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const [data, setData] = useState({});
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        axios
          .get(`https://reqres.in/api/users/${id}`)
          .then((res) => setData(res.data.data))
          .catch((err) => console.log(err));
      }, []);

    const handleEdit = (e) => {
        axios
        .put(`https://reqres.in/api/users/${e}`)
        .then((res) => console.log(res.data.data)
        .catch((err) => console.log(err)));
    }

    return (
        <div>
            <h1>Halaman Detail</h1>
            {
                !!Object.keys(data).length && (
                    <div style = {{ width: "100%" }}>
                        <div style = {{ width: "400px", margin: "0 auto" }}>

                            <div style = {{ display: "flex", flexDirection: "column" }}>
                                <p>{data.first_name}</p>
                            <div style = {{ width: "100px" }}>
                                <img src={data.avatar} />
                            </div>
                            <label>Name</label>
                            <input onChange={(e) => handleEdit(e)} type = "text" placeholder={data.first_name}/>
                            <label>Email</label>
                            <input onChange={(e) => handleEdit(e)} type = "text" placeholder={data.email}/>
                            </div>
                            <div style = {{ display: "flex", paddingTop: "10px" }}>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DetailPage;