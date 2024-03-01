'use client'
import React, { createContext, useState, ReactNode } from "react";

type ProductContextType = {
    data: any;
    reRender: boolean;
    setReRender: React.Dispatch<React.SetStateAction<any>>;
    setData: React.Dispatch<React.SetStateAction<any>>
}

export const ProductContext = createContext<ProductContextType>({
    data: null,
    reRender: false,
    setReRender:() => false,
    setData: () => []
});

type ProductProviderProps = {
    children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [data, setData] = useState<any>(null);
    const [reRender, setReRender] = useState<boolean>(false)

    return (
        <ProductContext.Provider value={{ data, setData, reRender, setReRender }}>
            {children}
        </ProductContext.Provider>
    );
};
