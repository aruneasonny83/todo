import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import '../css/home.css';
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";


function Home() {
  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');
  const navigate = useNavigate();
  
  const addItem = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('https://todo-app-lzp7.onrender.com/api/item', {item: itemText})
      setListItems(prev => [...prev, res.data]);
      setItemText('');
    }catch(err){
      console.log(err);
    }
  }

  
  useEffect(()=>{
    const getItemsList = async () => {
      try{
        const res = await axios.get('https://todo-app-lzp7.onrender.com/api/items')
        setListItems(res.data);
        console.log('render')
      }catch(err){
        console.log(err);
      }
    }
    getItemsList()
  },[]);

  
  const deleteItem = async (id) => {
    try{
      const res = await axios.delete(`https://todo-app-lzp7.onrender.com/api/item/${id}`)
      const newListItems = listItems.filter(item=> item._id !== id);
      setListItems(newListItems);
    }catch(err){
      console.log(err);
    }
  }

  
  const updateItem = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.put(`https://todo-app-lzp7.onrender.com/api/item/${isUpdating}`, {item: updateItemText})
      console.log(res.data)
      const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
      const updatedItem = listItems[updatedItemIndex].item = updateItemText;
      setUpdateItemText('');
      setIsUpdating('');
    }catch(err){
      console.log(err);
    }
  }
  
  const renderUpdateForm = () => (
    <form className="update-form" onSubmit={(e)=>{updateItem(e)}} >
      <input className="update-new-input" type="text" placeholder="New Item" onChange={e=>{setUpdateItemText(e.target.value)}} value={updateItemText} />
      <button className="update-new-btn" type="submit">Update</button>
    </form>
  )

  const logout = () => {

    navigate("/signin");
  };

  return (

    
    <div className="App">
      
      <div className="header">
      <div className="header-content">
      <h1>Todo List</h1>
        </div>
      </div>
      

      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Add Todo Item' onChange={e => {setItemText(e.target.value)} } value={itemText} />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        {
         listItems.map((item, index) => (
          <div className="todo-item" key={item._id || index}>
            {
              isUpdating === item._id
              ? renderUpdateForm()
              : <>
                  <p className="item-content">{item.item}</p>
                  <button className="update-item" onClick={() => setIsUpdating(item._id)}>Update</button>
                  <button className="delete-item" onClick={() => deleteItem(item._id)}>Delete</button>
                </>
            }
           
          </div>
          
          ))
        }
        

      </div>
      <button onClick={logout} className="logout-button">
      <FaSignOutAlt />
     
            </button>
    </div>
  );
}

export default Home;
