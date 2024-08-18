import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

interface IAmount {
	value: string
	currency: string
}

interface IRecipient {
	account_id: string
	gateway_id: string
}

interface IPaymentMethod {
	type: string
	id: string
	saved: boolean
}

interface IConfirmation {
	type: string
	return_url: string
	confirmation_url: string
}

export interface IPaymentResponse {
	id: string
	status: string
	amount: IAmount
	recipient: IRecipient
	payment_method: IPaymentMethod
	created_at: Date
	confirmation: IConfirmation
}

export enum EnumOrderStatus {
	PENDING = 'Pending',
	PAYED = 'Payed'
}

export interface IOrder {
	id: string
	createdAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
	total: number
}
