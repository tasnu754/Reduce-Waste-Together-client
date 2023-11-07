import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Auth/Authenticate";
import axios from "axios";

const ManageMyFoods = () => {
    const [manageFoods, setManageFoods] = useState([]);
    const { user } = useContext(AuthProvider);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/availableFoods?donarEmail=${user.email}`)
        .then(res=>setManageFoods(res.data))
        .catch(err=>console.log(err.message))
    },[user.email])


    return <div>{manageFoods.length}</div>;
};

export default ManageMyFoods;