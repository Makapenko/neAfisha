import { SUBCAT_ON_OFF, SUBCAT_ON, SUBCAT_OFF } from "./actionTypes"

export function checkboxHandleAC(payload) {
  return { type: SUBCAT_ON_OFF, payload }
}

export function checkboxHandleOnAC(payload) {
  return { type: SUBCAT_ON, payload }
}

export function checkboxHandleOffAC(payload) {
  return { type: SUBCAT_OFF, payload }
}
