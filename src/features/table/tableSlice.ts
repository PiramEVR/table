import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {tableAPI} from './tableAPI';

export interface TableState {
    "equipmentCosts": number
    "estimatedProfit": number
    "id": number
    "machineOperatorSalary": number
    "mainCosts": number
    "materials": number
    "mimExploitation": number
    "overheads": number
    "rowName": string
    "salary": number
    "supportCosts": number
    "total": number
};

const initialState: TableState[] = [] as TableState[];


export const setList = createAsyncThunk(
    'table/addList',
    async () => {
        const response = await tableAPI.getList();
        return response.data;
    }
);

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setList.fulfilled, (state, action) => {
                    state.push(action.payload)
            })
    },
});


export default tableSlice.reducer;
