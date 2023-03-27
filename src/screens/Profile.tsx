import { Stack, Heading, Button, Input } from "native-base";
import React from "react";
import { View } from "react-native";
import { useState } from "react";

export function Profile() {
    const [user, setUser] = useState('');
    const [show, setShow] = useState(false);
    return (
        <View>
            <Stack h='full'
                px='10'
                direction='column'
                alignItems='center'
                justifyContent='center'
                space='6'>
                {show && <Heading testID="printed-username">Bem vindo {user}</Heading>}

                <Input value={user}
                    onChangeText={setUser}
                    testID="input-name"
                    placeholderTextColor='white'
                    backgroundColor='darkBlue.200'
                    borderRadius='3xl'
                    borderColor="blue"
                    placeholder='Digite seu nome' />

                <Input testID="input-password"
                    placeholderTextColor='white'
                    backgroundColor='darkBlue.200'
                    borderRadius='3xl'
                    placeholder='Digite seu senha' />

                <Button onPress={() => { setTimeout(() => { setShow(true); }, 2000) }}
                    testID="botao-test"
                    borderRadius='3xl'
                    p='2'
                    px='8'>Logar</Button>


            </Stack>

        </View>
    );
}