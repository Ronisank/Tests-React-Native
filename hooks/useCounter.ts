import { useState } from 'react';

export const useCounter = () => {
    const [counter, setCounter] = useState(0);
    function incrementCounter() {
        setCounter(counter + 1);
    }
    return [counter, incrementCounter];
}