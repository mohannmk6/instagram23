import React from "react";

export default async function Suggetions() {
  async function getUsers() {
    let response = await fetch("https://freetestapi.com/api/v1/actors");
    let data = await response.json();
    return data;
  }
  let users = await getUsers();
  console.log(users);

  return (
    <div className=" ">
      <div className="flex justify-between ml-2 mt-3">
        <h3>Suggetions For you </h3>
        <h3>See All</h3>
     </div>
      {users.map((user: any) => {
        return (
          <div className="bg-white rounded-sm ml-5 ">
            <div className="flex justify-between ml-2 mt-3 ">
              <img
                src={user.image}
                className="rounded-full h-12 w-12 border p-1 mr-3 object-contain"
              />
              <p className="flex-1 mt-2">{user.name}</p>
            
              <h3 className="text-blue-400 font-semibold mt-2">follow</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}


