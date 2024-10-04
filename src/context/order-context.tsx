"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OrderData {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentMethods: string;
  complemento?: string;
}

interface OrderContextType {
  orderData: OrderData | null;
  setOrderData: (data: OrderData) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
