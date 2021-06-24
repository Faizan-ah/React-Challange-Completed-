import React, { useState } from 'react';
import UserCard from './UserCard'
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import TopMenu from '../Menu/TopMenu';

const ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

function Users(){
    const[value,setValue] = useState('') 
    //Passing query to useQuery hook to fetch data
    const{data, loading, error, networkStatus} = useQuery(ALL_USERS, {fetchPolicy: "cache-and-network"})
    
     function sendDataToParent(value){ // the callback. Use a better name
        setValue(value);
      };
    
    if (networkStatus === NetworkStatus['refetch'])
        return 'Refetching!';
    else if (loading)
        return 'Loading..';
    else if (error)
        return `Error! ${error}`;
    else if(data)
        console.log('data id',data)
        var userData = data['getAllUsers']
        //filter function filtering names -  FOR SEARCHING USERS
        const filter = (data)=>{
          return data.filter((name) =>{
            return(
              name.firstName.toLowerCase().indexOf(value.toLowerCase())>-1
              || name.lastName.toLowerCase().indexOf(value.toLowerCase())>-1
            ) 
          })
        };
        return(
            <>
            {/* Top menu of the page  */}
            <TopMenu data = {userData} getData={sendDataToParent}/>
            {/* User Cards  */}
            <div className="is-scrollable-list">
                {data ? filter(data.getAllUsers).map((item) => {
                    return (
                    <UserCard
                        key={item.id}
                        item={item}
                    />
                    )
                    
                }) : 'Users list undefined...' }
            </div>
            </>
        )
}

export default Users;