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
        case 5:
            return Object.assign({},state,{
                name:'money many'
            })
        case 7:
            return Object.assign({},state,{name:'fafafa'});
        case 8:
            return Object.assign({},state,{name:'faff88'})
        default:
        return state

    }
}