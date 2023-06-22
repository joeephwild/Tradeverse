import { createContext, useEffect, useState, useContext } from "react";

interface ContractChildren {
  children: React.ReactNode;
}

interface ContractContextTypes {}

const ContractContext = createContext<ContractContextTypes | null>(null);

export const ContractProvider = ({ children }: ContractChildren) => {
    const ProductContract = "0x2445F8bF99B2f0804aD6817E5c4ebc76fFB2Cc2b"
  const value = {};
  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};
