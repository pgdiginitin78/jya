import { API } from "../../http-common"

export const userLogin = (postObj)=>{
  return API.post(`loginJYA`,postObj)
}

export const signupJYA = (postObj)=>{
  return API.post(`signupJYA`,postObj)
}