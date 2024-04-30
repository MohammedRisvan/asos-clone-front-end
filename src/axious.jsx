import axios from "axios";
const useraxious=axios.create({
    baseURL:'http://localhost:3005/asos',
})
const adminaxious=axios.create({
    baseURL:'http://localhost:3005/asosadmin'
})
export {useraxious,adminaxious};