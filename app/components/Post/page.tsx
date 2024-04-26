import React from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";

export default async function Post() {
  async function getUsers() {
    let response = await fetch("https://freetestapi.com/api/v1/actors");
    let data = await response.json();
    return data;
  }
  let users = await getUsers();
  console.log(users);
  return (
    <div className=" ">
      {users.map((user: any) => {
        return (
          <div className="bg-white my-7 border rounded-sm ">
            <div className="flex items-center p-5 ">
              <img
                src={user.image}
                className="rounded-full h-12 w-12 border p-1 mr-3 object-contain"
              />
              <p className="flex-1 font-bold">{user.name}</p>
              <IoEllipsisHorizontalSharp className="h-5" />
            </div>
            <img src={user.image} className="object-cover w-full" />
            <div className="flex justify-between px-4 pt-4">
              <div className="flex p-5 gap-3">
                <FaRegHeart className="h-5 " />
                <IoMdChatboxes className="h-5" />
                <FaRegPaperPlane className="h-5" />
              </div>
              <IoBookmarksOutline className="h-5" />
            </div>
            <p className="p-5 truncate">
              <span className="font-bold mr-1">{user.name}</span>
              <p>hi welocme to intagram</p>
            </p>
            <form action="" className="flex items-center p-4">
              <FaRegSmile />
              <input 
              type="text" 
              className="border-none flex-1 ml-2 focus:ring-0 outline-none"
               placeholder="Add a comment" />
              <button className="font-semibold text-blue-600">Post</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}




