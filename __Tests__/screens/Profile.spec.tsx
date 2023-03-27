import { render, fireEvent, waitFor, renderHook, act } from '@testing-library/react-native';
import React from 'react';
import { Profile } from '../../src/screens/Profile';
import { NativeBaseProvider } from 'native-base';
import { useCounter } from '../../hooks/useCounter';
import { Counter } from '../../src/screens/Counter';
type Props = {
    children?: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => (
    <NativeBaseProvider initialWindowMetrics={inset}>
        {children}
    </NativeBaseProvider>
);

const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe('Profile', () => {

    //Teste no componente Login Teste 01 EX.01

    // it('Verify placeholder', () => {
    //     const { getByPlaceholderText } = render(<Profile />);
    //     const name = getByPlaceholderText('name');
    //     const password = getByPlaceholderText('Password');
    //     expect(name).toBeTruthy();
    //     expect(password).toBeTruthy();

    // });
    // it('Verify placeholder', () => {
    //     const { getByTestId } = render(<Profile />);
    //     const inputName = getByTestId('input-id-name');
    //     expect(inputName.props.placeholder).toEqual('name');
    // });

    // Teste 2 EX.01

    // it("verify if borderColor color is blue", () => {
    // const { getByTestId } = render(<Profile />, { wrapper: Provider });
    // const input = getByTestId('input-name');
    // expect(input.props.style.borderColor ).toEqual("blue");

    // it("checks if user data has been saved", () => {
    //     const { getByTestId } = render(<Profile />);
    //     const inputName = getByTestId('input-id-name');
    //     expect(inputName.props.value).toEqual('Roni');
    // });

    // EX 02 - Testes utilizando Contexto
    
    // it("verify multiple components", () => {
    //     const ids = ["input-id-name", "input-id-surname"];
    //     const { getByTestId } = render(<Profile />);
    //     ids.forEach(id => {
    //         const input = getByTestId(id);
    //         expect(input.props.value).toEqual("Roni")
    //     });
    // })


    // test("verify if background color is red", () => {
    //     const { getByTestId } = render(<Profile />);
    //     const input = getByTestId('input-id-name');
    //     expect(input.props.style.backgroundColor).toEqual('red');
    // });
    // it("verify if input exists", () => {
    //     const { getByTestId } = render(<Profile />, { wrapper: Provider });
    //     const input = getByTestId('input-name');
    //     expect(input).toBeTruthy();
    // });
    // it('verify if the user name is printed', async () => {
    //     const expectedWelcome = 'Bem vindo Roni';
    //     const screen = render(<Profile />, { wrapper: Provider });
    //     fireEvent.changeText(screen.getByTestId('input-name'), 'Roni');
    //     fireEvent.press(screen.getByTestId('botao-test'));
    //     const welcomeOutput = await waitFor(
    //         () => screen.getByTestId('printed-username'), { timeout: 3000 }
    //     );
    //     expect(welcomeOutput.props.children[0] + welcomeOutput.children[1]).toEqual(expectedWelcome);
    // });
    // it('should increment counter', () => {
    //     const { result } = renderHook(() => useCounter());
    //     expect(result.current[0]).toBe(0);
    //     act(() => {
    //         result.current[1]();
    //     });
    //     expect(result.current[0]).toBe(1);
    // });
    // it('verify if the user name is printed', async () => {
    //     const users = ["Roni", "Arthur", "Rafael"];
    //     users.forEach(async (user) => {
    //         const expectedWelcome = `Bem vindo ${user}`;
    //         const screen = render(<Profile />, { wrapper: Provider });
    //         fireEvent.changeText(screen.getByTestId('input-name'), `${user}`);
    //         fireEvent.press(screen.getByTestId('botao-test'));
    //         const welcomeOutput = await waitFor(
    //             () => screen.getByTestId('printed-username'), { timeout: 3000 }
    //         );
    //         expect(welcomeOutput.children[0] + welcomeOutput.children[1]).toEqual(expectedWelcome);
});
});