// import axios
import axios from 'axios';

const api = axios.create({
    // heroku is replacing the localhost:3001
    // baseURL: "https://fierce-chamber-94727.herokuapp.com"
    baseURL: "http://localhost:3001"
})

// ========================== AUTH =========================== \\

// signup
// goes to http://localhost:3001/auth/signup
export const signupUser = async (signupData) => {
    const resp = await api.post('/auth/signup', signupData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `${resp.data.token}`;
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
export const destroyProfile = async (userId, profileData) => {
    await api.delete(`/profile/${userId}`, profileData);
}

// ========================== DESIGNS =========================== \\

// get all designs
//  goes to http://localhost:3001/placeorder
export const allDesigns = async() => {
    console.log("I am here")
    const resp = await api.get('/placeholder/design');
    console.log("Yo my resp is")
    console.log(resp)
    return resp;
}