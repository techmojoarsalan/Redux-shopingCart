import React, { useEffect } from 'react'
import Products from './Component/Products'
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => async () => {
  //   const res = await axios.get("https://dummyjson.com/products");
  //   const { products } = res.data
  //   dispatch(fetchData(products))
  // }, [])
  return (
<>
<h1 className='text-primary text-center m-2'>Shoping Cart Project With Redux</h1>
 <Products/>
    </>
  )
}
export default React.memo(App)