// import axios
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001"
})

// ========================== AUTH =========================== \\

// signup
// goes to http://localhost:3001/auth/signup
export const signupUser = async (signupData) => {
    const resp = await api.post('/auth/signup', signupData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `${resp.data.token}`
    return resp.data.user;
}

// login
// goes to http://localhost:3001/auth/login
export const loginUser = async (loginData) => {
    const resp = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `${resp.data.token}`
    return resp.data.user;
}