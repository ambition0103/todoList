import React,{useState} from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./Componente/CustomButton";
import Users from "./Componente/Users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "컴터하기" },
    { id: 2, name: "롤토체스하기" },
    { id: 3, name: "맥주에 치킨먹기" },
    { id: 4, name: "소주에 제육먹기" },
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
        placeholder="하고 싶은 일을 쓰세용!"
                        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)} 
      />
       
      <CustomButton color="green" onClick={addUserHandler}>추가하기</CustomButton>


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
