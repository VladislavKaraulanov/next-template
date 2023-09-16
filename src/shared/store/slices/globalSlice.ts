import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { globalType } from '@/shared/store/types'

const initialState: globalType = {
	cookies: {
		bar: false,
		permission: false
	}
}

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		openCookiesBar: state => {
			const cookiesBarStatus = localStorage.getItem('cookiesBarActive')
			if (cookiesBarStatus === null) {
				state.cookies.bar = true
			}
		},
		responseCookiesBar: (state, action: PayloadAction<boolean>) => {
			state.cookies.bar = false
			state.cookies.permission = action.payload
			localStorage.setItem('cookiesBarActive', `${action.payload}`)
		}
	}
})

export const cookiesState = (state: { global: globalType }) =>
	state.global.cookies
export const { openCookiesBar, responseCookiesBar } = globalSlice.actions
export default globalSlice.reducer
