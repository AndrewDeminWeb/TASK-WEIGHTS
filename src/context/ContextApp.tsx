import { createContext, useState } from "react";
import { AnyData } from "../types/index.types";

export const someContext = createContext<AnyData>({});

function ContextApp({ children }: any) {
	const [sub, setSub] = useState<string>("H05V-U 0,5");
	const [selectGroup, setSelectGroup] = useState<string>("H05V-U");

	const value = { sub, setSub, selectGroup, setSelectGroup };

	return <someContext.Provider value={value}>{children}</someContext.Provider>;
}

export { ContextApp };
