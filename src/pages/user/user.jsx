import React from 'react';
import { linkAxios } from '../../config/linkAxios';
import { useParams } from 'react-router-dom';
const User = () => {
const [data, setData]=React.useState([])
const param = useParams()
React.useEffect(()=>{
  linkAxios.get(`/products/${param.id}`).then((response)=>setData(response.data))
})
  return (
    <div>
      <h2>{data?.description}</h2>
      <h2>{data?.id}</h2>
    </div>
  );
}

export default User;