// import axios
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001"
})

// ========================== AUTH =========================== \\

// goes to http://localhost:3001/auth/signup
export const signupUser = async (signupData) => {
    const resp = await api.post('/auth/signup', signupData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `${resp.data.token}`
    return resp.data.user;
}