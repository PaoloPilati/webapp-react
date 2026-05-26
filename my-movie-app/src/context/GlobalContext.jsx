import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {

    //variabile di stato
    const [isLoading, setIsLoading] = useState(false);
    return (
        <GlobalContext.Provider
            value={{isLoading, setIsLoading}}>
                {children}
        </GlobalContext.Provider>
    );
}

//hook per consumare il context
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobal };