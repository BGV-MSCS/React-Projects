import Container  from "./Container";
import SearchBar from "./SearchBar";
import Provider from "./todoHelper";
import { useState, useContext } from 'react';
import { InputFieldContext  } from "./todoHelper";
import List from "./List";
export default function Parent(){
    const initialtext = useContext(InputFieldContext);
    const [textField , setTextField] = useState(initialtext);
    let obj = {
        textField, setTextField
    }
    return (
        <Container>
            <Provider>
            <InputFieldContext.Provider value = {obj}>
            <SearchBar />
            <List />
            </InputFieldContext.Provider>
            </Provider>
        </Container> 
    );
}