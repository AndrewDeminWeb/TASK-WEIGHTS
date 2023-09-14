import { useCallback, useRef } from "react";
import type { AnyData } from "../types/index.types";

function BrandSizeGroup({
	weights,
	setSelectGroup,
	children
}: React.PropsWithChildren<AnyData>) {
	const selectRef = useRef<HTMLSelectElement | null>(null);

	const handleChangeGroup = useCallback(() => {
		setSelectGroup(
			selectRef.current?.options[selectRef.current?.selectedIndex].textContent
		);
	}, []);

	return (
		<>
			<select ref={selectRef} onChange={handleChangeGroup}>
				{Object.keys(weights)?.map(v => (
					<option key={v}>{v}</option>
				))}
			</select>

			{children}
		</>
	);
}

export { BrandSizeGroup };
