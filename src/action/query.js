import axios from 'axios';
let url = 'https://www.easy-mock.com/mock/5c3b32886e3f5f24c34355d8/example/query';
const getlist = (type)=>(
    {
        type:555,
        data:type.data
    }
)
const query = () =>{
    return (dispatch)=>{
        return axios.post(url).then((res)=>{
            const type =  {type:555,data:res.data.data.pagelist}
            console.log(res.data.data.pagelist,'list')
            dispatch(getlist(type))
        })
    }
}
export default query