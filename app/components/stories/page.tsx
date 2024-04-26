import React from "react";


export default async function stories() {
  async function getUsers() {
    let response = await fetch("https://freetestapi.com/api/v1/actors");
    let data = await response.json();
    return data;
  }
  let users = await getUsers();
  console.log(users);
  return (
    <div className=" border flex overflow-x-scroll mt-2">
      {users.map((user: any) => {
        return (
          <div className="bg-white   rounded-sm mt-2 p-1 ">
            <div >
              <div className="rounded-full">
              <img src={user.image} className="rounded-full border-4 h-14 w-14  text-center
                    object-contain cursor-pointer"
                 
              />
              </div>
            
              <p className="truncate text-xs w-14 text-center">{user.name}</p>
             
            </div>
          
          
           
          </div>
        );
      })}
    </div>
  );
}

{/* <div className=" mt-2 p-1 ">
<div>
  <div className="p-1 bg-gradient-to-tr from-amber-500 to-fuchsia-700 rounded-full ">
  <div className="p-1 bg-white rounded-full">
  <img src={user.image} className="rounded-full  h-14 w-14  text-center  cursor-pointer"/>
  </div>
  </div>
 

  <p className="truncate text-xs w-14 text-center">{user.name}</p>
 
</div>



</div> */}