let action = {type:1,text:'cc'}
export  const reducer = (state={name:'liukun'},action)=>{
    console.log(action,'aciton')
    switch (action.type){
        case 1:
            state.name = 'cc'
            return state

    }
}