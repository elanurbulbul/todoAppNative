import React, {useState} from "react";
import { Text } from "react-native";
import Header from "./Header";
import ListItem from "./ListItem";

const Home = () => {

    //todos

    const initialTodos= [
        {
            title: "Get some snacks",
            date: "Fri, 08 Jan 2021 16:32",
            key:"1" 
        }, 
        {
            title: "Finsh Project",
            date: "Mon, 11 Jan 2021 11:02",
            key:"2"  
        },
        {
            title: "Go to English Class",
            date: "Sun, 15 Jan 2021 20:32",
            key:"3"  
        }
    ]
    const [todos, setTodos] = useState(initialTodos);

    return(
        <>
            <Header/>
            <ListItem
                todos={todos}
                setTodos={setTodos}
            />
        </>
        
    );
}
export default Home;