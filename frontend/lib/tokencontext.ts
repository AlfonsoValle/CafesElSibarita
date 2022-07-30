import React, { useContext } from 'react';

export interface IToken {
    value:string;

}

export const TokenContext = React.createContext<{
   Auth0Token?: IToken;
   
}>({});

export const useToken = () => {
    const ctx = useContext(TokenContext);
    return ctx;
};