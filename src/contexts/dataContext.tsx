import { createContext, ReactNode } from "react";


export const YearContext = createContext<number | undefined>(undefined);
interface YearContextProps {
    children: ReactNode
}

export const YearContextProvider: React.FC<YearContextProps> = ({ children }) => {
    const year = 2025;
    return (
        <YearContext.Provider value={year}>
            {children}
        </YearContext.Provider>
    );
}