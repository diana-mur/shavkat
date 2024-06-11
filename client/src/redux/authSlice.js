import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: undefined,
    token: localStorage.getItem('token'),
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.loading = false
            state.error = undefined
            state.token = undefined

            localStorage.removeItem("token")
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authThunk.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(authThunk.fulfilled, (state, action) => {
            const payload = action.payload

            state.message = payload.message
            if (payload.token) {
                state.token = payload.token

                localStorage.setItem("token", payload.token)

                state.error = undefined
                state.loading = false
            }
        })
        builder.addCase(authThunk.rejected, (state, action) => {
            const payload = action.payload

            state.error = payload.message
            state.loading = false
        })
    }
})

export const authThunk = createAsyncThunk('authThunk', async (data, { rejectWithValue }) => {
    try {
        const response = await fetch(`http://localhost:8080/api/user/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        if (response.status == 400) {
            return rejectWithValue(json)
        }
        return json
    } catch (error) {
        console.log(error);
        return rejectWithValue(error)
    }
})

export const { logOut } = authSlice.actions
export default authSlice.reducer