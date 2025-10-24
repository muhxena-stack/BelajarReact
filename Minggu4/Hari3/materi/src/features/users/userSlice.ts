import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
	id: number;
	name: string;
	email: string;
}

interface UsersState {
	list: User[];
	status: string;
	error: string | null;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");

	const data = await response.json();

	return data;
});

const userSlice = createSlice({
	name: "users",
	initialState: {
		list: [],
		status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	} as UsersState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.list = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "Unknown error";
			});
	},
});

export default userSlice.reducer;