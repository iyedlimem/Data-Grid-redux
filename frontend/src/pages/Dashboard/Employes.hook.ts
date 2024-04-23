import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { IUser } from '../Authentification/User.model'
import { IEmploye } from './Employe.model'
import employeService from './Employes.service'

const user :IUser = JSON.parse(localStorage.getItem('user') || '{}');
const employes:IEmploye[] =[] 
const initialState = {
  employes:employes,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new employe
export const createEmploye = createAsyncThunk(
  'employes/create',
  async (employeData: IEmploye, thunkAPI) => {
    try {

      const token = user.token || ""
      return await employeService.createEmploye(employeData, token)
    } catch (error) {
      const message = error
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user employes
export const getEmployes = createAsyncThunk(
  'employes/getAll',
  async (_, thunkAPI) => {
    try {
      const token = user.token || ""
      return await employeService.getEmployes(token)
    } catch (error) {
      const message = error
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// update an employe
export const updateEmploye = createAsyncThunk(
  'employes/update',
  async (employeId, thunkAPI) => {
    try {
      const token = user.token || ""
      return await employeService.updateEmploye(employeId, token)
    } catch (error) {
      const message = error
      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const getEmploye = createAsyncThunk(
  'employes/getOne',
  async (employeId, thunkAPI) => {
    try {
      const token = user.token || ""
      return await employeService.getEmploye(employeId, token)
    } catch (error) {
      const message = error
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// update all employes
export const updateAllEmployes = createAsyncThunk(
  'employes/updateAll',
  async (newemployes: IEmploye[], thunkAPI) => {
    try {
      const token = user.token || ""
      return await employeService.updateAllEmployes(newemployes, token)
    } catch (error) {
      const message = error
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// pay an employe
export const payEmploye = createAsyncThunk(
  'employes/pay',
  async (employeId, thunkAPI) => {
    try {
      const token = user.token || ""
      return await employeService.payEmploye(employeId, token)
    } catch (error) {
      const message = error
      return thunkAPI.rejectWithValue(message)
    }
  }
)


// Delete user employe
export const deleteEmploye = createAsyncThunk(
  'employes/delete',
  async (id:any, thunkAPI) => {
    try {
       const token = user.token || ""
      return await employeService.deleteEmploye(id, token)
    } catch (error) {
      const message = error
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const employeSlice = createSlice({
  name: 'employe',
  initialState,
  reducers: {
    reset:  (state) => {
      state.employes = employes
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEmploye.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEmploye.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employes.push(action.payload)
      })
      .addCase(createEmploye.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = 'rejected'
      })
      .addCase(getEmployes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEmployes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employes = action.payload
      })
      .addCase(getEmployes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = 'rejected'
      })
      .addCase(deleteEmploye.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEmploye.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employes = state.employes.filter(
          (employe:IEmploye) => employe._id !== action.payload.id
        )
      })
      .addCase(deleteEmploye.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = 'rejected'
      })
  },
})

export const { reset } = employeSlice.actions
export default employeSlice.reducer
