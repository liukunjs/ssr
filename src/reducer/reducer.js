let action = {type:1,text:'cc'}
export  const reducer = (state={name:'liukun'},action)=>{
    console.log("action come")
    switch (action.type){
        case 1:
            console.log('case1')
            return Object.assign({}, state, {
                name:'cc love lk'
            });
        case 0:
            return Object.assign({},state,{
                name: 'lk love cc'
            })
        default:
        return state

    }
}