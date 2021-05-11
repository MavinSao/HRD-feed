import axios from 'axios'

const API_URL = "http://110.74.194.124:9999/api/auth/"

const register = (fullname, username, password) => {
    return axios.post(API_URL + "register", {
        username,
        fullname,
        password
    });
}

const login = (username, password) => {
    return axios.post(API_URL + "login", {
        username,
        password
    })
        .then((response) => {
            if (response.data.payload.token) {
                localStorage.setItem("user", JSON.stringify(response.data.payload));
            }
            return response.data.payload
        })
}

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};