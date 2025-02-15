import React, { useEffect, useState } from 'react'
const UseEffectEx = () => {
    // const[count , setCount]=useState(0);
    // console.log(count);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(100);
    //     },4000)
    //     document.title = "MRU";
    // },[count])

    // ! api fetch
    const [users , setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json().then(data=>{
            // console.log(data);
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='parent'>
        UseEffectEx
        {/* <h1>{count}</h1> */}
        {
            users.map((user , index)=>{
                return(
                        // <>
                        // <h1>{user.name}</h1>
                        // <h3>{user.email}</h3>
                        // </>
                        <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                        </React.Fragment>
                )
            })
        }
    </div>
  )
}
export default UseEffectEx


// ! object destructuring
// let obj ={
//     a:1,
//     b:2,
//     c:3
// }
// // console.log(obj.a);
// // console.log(obj.b);
// // console.log(obj.c);
// let{a , b, c} = obj;
// console.log(a);
// console.log(b);
// console.log(c);