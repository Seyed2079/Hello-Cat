import { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

const App = () => {

    const [userText, updateUserText] = useState("");

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', gap: 50}}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{width: 200, height: 200, alignSelf: 'center'}}
            />
            <TextInput
                style={{
                    height: 50,
                    width: '80%',
                    alignSelf: 'center',
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 8
                }}
                placeholder="You can type in me"
                onChangeText={value => updateUserText(value)}
            />
            <Text>{userText}</Text>
        </ScrollView>
    );

}

export default App;