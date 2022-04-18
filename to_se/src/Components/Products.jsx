import { useState , useEffect } from "react"
import axios from "axios";

export const Products = ()=>{

   
    const [list , setList] = useState([]);
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
        .then((request)=>setList(request.data.meals))
    },[])
   
      // console.log(list)
      


    return(
        <div>
            <h1>Products</h1>

           

            <table>
                <thead>
                    <tr>
                        <th>Dish Image</th>
                        <th>Dish Name</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((e,i)=>(
                    <tr key={e.i}>
                     <td style={{widh:"200px" , height:"150px" }}><img src={e.strMealThumb} height="100%" width="100%" /></td>
                     <td>{e.strMeal}</td>
                    </tr>
                ))}
                </tbody>
            </table>

           
        
        
        </div>
    )
}