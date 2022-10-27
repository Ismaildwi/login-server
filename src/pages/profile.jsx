import{useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


const Profile = ()  => {
    const{token} = useParams ()
    const [data,setData] = useState()
    const getData = async () => {
        
        const {data} = await axios("http://fadfaasd.herokuapp.com/api/v1/auth/google", {
            headers:{
                "Authorization": `Bearer ${token}`
            }
        });
        setData(data);
        console.log(data)
    }

    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, [])
    return (
        <h1>Selamat Datang, {data?.data.email}</h1>
    )
}

export default Profile