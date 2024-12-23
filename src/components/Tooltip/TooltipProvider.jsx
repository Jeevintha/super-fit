import { createContext, useContext, useState } from 'react';

const TooltipContext = createContext(null);

export const useTooltip = () => useContext(TooltipContext);

export const TooltipProvider = ({ children }) => {
  const [tooltip, setTooltip] = useState(null);

  return (
    <TooltipContext.Provider value={{ tooltip, setTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};