import { FC } from "react";
import { ListWithState } from "./state";
import { ListWithMemo } from "./memo";
import { fruitsList } from "./list";
export const App: FC = () => (
	<div>
		<ListWithMemo list={fruitsList} />
		<ListWithState list={fruitsList} />
	</div>
);
