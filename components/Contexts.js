import { createContext, useState } from "react";

export const uidContext = createContext();

export const UidProvider = ({ children }) => {
    const [user, setUser] = useState("");
    return (
        <uidContext.Provider value={{ user, setUser }}>
            {children}
        </uidContext.Provider>
    );
};
