export const getproducts = () => async(dispatch)=>{
    try{
        const res = await fetch('/getproducts',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await res.json();
        dispatch({type: 'SUCCESS_GET_PRODUCTS', payload: data})
    }catch(err){
        console.log(err)
        dispatch({type: 'FAIL_GET_PRODUCTS', payload: err})
    }
}
