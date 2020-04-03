var initState = {　　　　//这个是用于初始化数据
  user:{}  　　
}
const reducer = (state = initState, actions) => {
　　var newState = { ...state }　　　　//用于拷贝初始化数据
　　if (actions.type === "UPDATA_USER") {　　　　　　//匹配相对应的action，之后进行相对性的操作
　　　　newState.user = actions.user;
　　}
　　if (actions.type === "CLEAR_USER") {
　　　　newState.user = {};
　　}
　　return newState
}
export default reducer;