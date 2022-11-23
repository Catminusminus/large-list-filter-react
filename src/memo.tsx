import { useState, useMemo, FC } from "react";

type Props = {
	list: string[];
};

export const ListWithMemo: FC<Props> = ({ list }) => {
	const [selected, setSelectedItem] = useState("");
	const selectedItems = useMemo(
		() => list.filter((item) => item.includes(selected)),
		[selected],
	);
	return (
		<div>
			<select onChange={(e) => setSelectedItem(e.target.value)}>
				<option value="coconut">Coconut</option>
				<option value="mango">Mango</option>
			</select>
			<>{selectedItems}</>
		</div>
	);
};
