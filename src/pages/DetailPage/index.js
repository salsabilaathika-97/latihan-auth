import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const [data, setData] = useState([]);
    const param = useParams();
    const id = param.id;

    useEffect(() => {
        axios
          .get(`https://reqres.in/api/users/${id}`)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      }, []);

    return (
        <div>
            <h1>Halaman Detail</h1>
            {
                !!Object.keys(data).length && (
                    <div>
                        <p>{data.first_name}</p>
                        <img src={data.avatar} />
                    </div>
                )
            }
        </div>
    )
}

export default DetailPage;