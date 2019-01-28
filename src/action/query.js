import axios from 'axios';
let url = 'https://www.easy-mock.com/mock/5bac6c530132334db7167131/example_copy/query';
const getlist = (type)=>(
    {
        type:555,
        data:type.data
    }
)
const query = () =>{
    return (dispatch)=>{
        return axios.get(url).then((res)=>{
            const type =  {type:555,data:res.data.data.list}
            console.log(res.data.data.list,'list')
            dispatch(getlist(type))
        })
    }
}
export default query