import React from 'react';
import LogOut from "../components/LogOut"

const USERTABLE = 
  {
    user:[{
    "id":1,
    "name":"test1",
    "age" : "11",
    "gender":"male",
    "email" : "test1@gmail.com",
    "phoneNo" : "9415346313"
    },
    {
    "id" : 2,
    "name":"test2",
    "age" : "12",
    "gender":"male",
    "email" : "test2@gmail.com",
    "phoneNo" : "9415346314"
    },
    {
    "id":3,
    "name":"test3",
    "age" : "13",
    "gender":"male",
    "email" : "test3@gmail.com",
    "phoneNo" : "9415346315"
    },
    {
    "id":4,
    "name":"test4",
    "age" : "14",
    "gender":"male",
    "email" : "test4@gmail.com",
    "phoneNo" : "9415346316"
    },
    {
    "id":5,
    "name":"test5",
    "age" : "15",
    "gender":"male",
    "email" : "test5@gmail.com",
    "phoneNo" : "9415346317"
    },
    {
    "id":6,
    "name":"test6",
    "age" : "16",
    "gender":"male",
    "email" : "test6@gmail.com",
    "phoneNo" : "9415346318"
    }
    ]
}


export default function Dashboard() {

  return (
    <>
    <LogOut/>
    <table>
      <thead>
        <th>id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Email</th>
        <th>PhoneNo</th>
      </thead>
      <tbody>
        {USERTABLE.user.map((s, i)=>(
          <tr key={i} > 
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.age}</td>
            <td>{s.gender}</td>
            <td>{s.email}</td>
            <td>{s.phoneNo}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}
