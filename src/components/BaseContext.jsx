import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const Context = createContext()
function BaseContext({children}) {
    const [menu, setMenu] = useState(false)
    const [hover, setHovered] = useState(false)
    const [modal, setModal] = useState(false);
    const [allmenu, setAllMenu] = useState(false)

    return (
        <Context.Provider value={{menu, setMenu, hover, setHovered, modal, setModal, allmenu, setAllMenu}}>
            {children}
        </Context.Provider>
    );
}

export default BaseContext;