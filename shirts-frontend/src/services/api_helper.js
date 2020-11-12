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

// verify login for page refreshing
export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');

    if (token) {
        api.defaults.headers.common.authorization = `${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data
    }
    return false;
}

// update Profile
//  goes to http://localhost:3001/profile/:userId
export const putProfile = async (userId, profileData) => {
    const resp = await api.put(`/profile/${userId}`, profileData);
    return resp.data;
}

// delete Profile
//  goes to http://localhost:3001/profile/:userId
export const destroyProfile = async (userId) => {
    await api.delete(`/prfile/${userId}`);
}