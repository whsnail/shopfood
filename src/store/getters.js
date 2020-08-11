export default{
    totalCount(state){
        return state.cartFoods.reduce((preValue,item)=>preValue+item.count,0)
    },
    totalPrice(state){
        return state.cartFoods.reduce((preValue,item)=>preValue+item.count*item.price,0)
    },
    positiveSize(state){
        return state.ratings.reduce((preValue,item)=>preValue+(item.rateType===0?1:0),0)
    }
}