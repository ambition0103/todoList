import React,{useState} from "react";
import "./App.css"; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import CustomButton from "./Componente/CustomButton";
import Users from "./Componente/Users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "์ปดํฐํ๊ธฐ" },
    { id: 2, name: "๋กคํ ์ฒด์คํ๊ธฐ" },
    { id: 3, name: "๋งฅ์ฃผ์ ์นํจ๋จน๊ธฐ" },
    { id: 4, name: "์์ฃผ์ ์ ์ก๋จน๊ธฐ" },
  ]);
  
  const [name, setName]=useState("")

  const addUserHandler=()=> {
    const newUser={
      id:users.length+1,
      name:name
    }
    setUsers([...users,newUser])
  }

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id!==id);
    setUsers(newUserList);
  };


  return (
    <div>
      <div className='title'>
        TO Do List!
      </div>


      <input value={name}
        placeholder="ํ๊ณ  ์ถ์ ์ผ์ ์ฐ์ธ์ฉ!"
                        // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ name์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
        onChange={(e) => setName(e.target.value)} 
      />
       
      <CustomButton color="green" onClick={addUserHandler}>์ถ๊ฐํ๊ธฐ</CustomButton>


      <div className="app-style">
        {users.map((user) => {
        return (
        <Users handleDelete={deleteUserHandler}
          user={user} 
          key={user.id}
         ></Users>
        );
        })}
      </div>
      

      </div>
  );
};

export default App;
