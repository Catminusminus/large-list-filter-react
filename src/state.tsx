import { useState, FC } from "react";

type Props = {
	list: string[];
};

export const ListWithState: FC<Props> = ({ list }) => {
	const [selectedList, setSelectedList] = useState<string[]>(list);
	const setSelectedItems = (value: string) => {
		setSelectedList(list.filter((item) => item.includes(value)));
	};
	return (
		<div>
			<select onChange={(e) => setSelectedItems(e.target.value)}>
				<option value="coconut">Coconut</option>
				<option value="mango">Mango</option>
			</select>
			<>{selectedList}</>
		</div>
	);
};
