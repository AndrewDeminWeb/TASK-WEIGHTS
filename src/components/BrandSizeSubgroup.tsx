import { useCallback, useEffect, useRef } from "react";
import type { AnyData } from "../types/index.types";

function BrandSizeSubgroup({
	find,
	setSub,
	children
}: React.PropsWithChildren<AnyData>) {
	const selectRef = useRef<HTMLSelectElement | null>(null);

	useEffect(() => {
		setSub(
			selectRef.current?.options[selectRef.current?.selectedIndex]?.textContent
		);
	}, [find]);

	const selectHandlerSubgroup = useCallback(() => {
		setSub(
			selectRef.current?.options[selectRef.current?.selectedIndex]?.textContent
		);
	}, []);

	return (
		<div>
			<select ref={selectRef} onChange={selectHandlerSubgroup}>
				{find[0] &&
					Object.keys(find[0])?.map((f: any) => <option key={f}>{f}</option>)}
			</select>

			{children}
		</div>
	);
}

export { BrandSizeSubgroup };
