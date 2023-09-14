import { useEffect, useState, useContext } from "react";
import { BrandSizeGroup } from "./components/BrandSizeGroup";
import { BrandSizeSubgroup } from "./components/BrandSizeSubgroup";
import { someContext } from "./context/ContextApp";
import type { AnyData } from "./types/index.types";
import weightsJSON from "../src/data/weights.json";
import st from "./ui/weight.module.scss";

function App() {
	const [weights, setWeights] = useState<AnyData>(weightsJSON);

	const { sub, setSub, selectGroup, setSelectGroup } = useContext(someContext);

	const [find, setFind] = useState<AnyData[]>([{}]);

	const [inputCalc, setInputCalc] = useState<string>("");

	const [getValueOfCalc, setGetValueOfCalc] = useState<AnyData[]>(find);

	useEffect(() => {
		setWeights(weightsJSON);
	}, []);

	useEffect(() => {
		setFind(
			Object.entries(weights)
				.map(([k, v]) => k === selectGroup && v)
				.filter(Boolean)
		);
	}, [weights, selectGroup]);

	useEffect(() => {
		setGetValueOfCalc(() => {
			const entryFind = Object.entries(find[0]).filter(
				([k, _]) => k === sub
			)[0];

			return entryFind?.[1]?.filter(
				(entry: any) => entry?.name === "Расчетная масса (вес)"
			);
		});
	}, [find, selectGroup, inputCalc, sub]);

	return (
		<>
			<div className={st.containerGroup}>
				<h3>Группа маркаразмера</h3>
				<BrandSizeGroup weights={weights} setSelectGroup={setSelectGroup}>
					<h3>Подгруппа маркаразмера</h3>
					<BrandSizeSubgroup find={find} setSub={setSub}>
						<div>
							<input
								type="number"
								className={st.inputBlock}
								value={inputCalc}
								onChange={e => setInputCalc(e.target.value)}
							/>
						</div>
					</BrandSizeSubgroup>
				</BrandSizeGroup>

				<div>
					{inputCalc &&
						`Расчет ${(
							getValueOfCalc?.[0]?.value * parseInt(inputCalc, 10)
						).toFixed(1)} кг`}
				</div>
			</div>
		</>
	);
}

export default App;
