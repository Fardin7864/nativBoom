import React, { useEffect, useState } from "react";
import { TextInput, View,  Text, Button} from "react-native";
import Input from "../../components/inputText/input";
import { Table, Row, Rows } from 'react-native-table-component';


const Signup = () => {
    const [show, setShow] = useState(false)
    const [users, setusers] = useState('')
    const [fields, setFields] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (field, text) => { 
        setFields((prevField) =>  ({...prevField, [field]: text}))
     }
    
    const handleSubmit = () => { 
        setShow(true)
     }

     useEffect(() => { 
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setusers(data))
      },[])

  return (
    <View style={{ flex: 1, justifyContent: "center",alignItems: 'center', gap: 10 }}>
      <Text style={{fontSize: 30, fontWeight: '600'}}>
        Sign Up
      </Text>
      <Input text="Name" mode='name' handleChange ={handleChange} fields={fields}/>
      <Input text="Email" mode='email' handleChange ={handleChange} fields={fields}/>
      <Input text="Password" mode='password' handleChange ={handleChange} fields={fields}/>
      <Button title="Submit" onPress={handleSubmit}/>
      <View>
        <Text>{fields.name}</Text>
        <Text>{fields.email}</Text>
      </View>
    </View>
  );
};


export default Signup;
