import { createContext, ReactNode, useState } from "react";

type counterContextType = {
    counter:number,
    setCounter:React.Dispatch<React.SetStateAction<number>>
}

export const CounterContext = createContext<counterContextType>({
    counter:0,
    setCounter: () => {}
});

interface counterContextProps {
    children:ReactNode
}

export const CounterContextProvider:React.FC<counterContextProps> = ({children}) => {
   
    const [counter,setCounter] = useState<number>(1);
    return (
        <CounterContext.Provider value={{counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    );
}