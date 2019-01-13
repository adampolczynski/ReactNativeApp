import { USER_LOGIN, MODAL_VISIBLE, MODAL_NAME, USER_DATA } from "./acion-types";
import { IUserData } from "../types/IUserData";

export const loginAction = (payload: boolean) => { return { type: USER_LOGIN, payload }};
export const modalVisibleAction = (payload: boolean) => { return { type: MODAL_VISIBLE, payload }}; 
export const modalNameAction = (payload: string) => { return { type: MODAL_NAME, payload }}; 
export const userDataAction = (payload: IUserData) => { return { type: USER_DATA, payload }};