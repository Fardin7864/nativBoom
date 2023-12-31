import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({text,mode,handleChange, fields}) => {
            console.log(fields.name, fields.email, fields.password)
    return (
        <View style={{marginHorizontal: 24, flexDirection: "row", alignItems: 'center', gap: 10}}>
        <Text style={style.text}> {text} :</Text>
        <TextInput
        inputMode={mode}
        onChangeText={(text) =>handleChange(mode,text)}
        value={fields[mode]}
        style={{
           borderColor: 'red',
           borderRadius: 10,
           borderWidth: 0.7,
           height: 45,
           width: 200,
           fontSize: 25,
           paddingLeft: 10
        }}
        />
      </View>
    );
};

const style = {
    text: {
        fontSize: 25,
        fontWeight: '400',

    }
}

export default Input;