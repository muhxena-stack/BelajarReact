import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./app/store";
import { decrement, increment, incrementByAmount } from "./features/counter/counterSlice";
import UserList from "./components/Counter";

function App() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<h1>Counter: {count}</h1>

				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
				<button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
			</div>

			<UserList />
		</>
	);
}

export default App;