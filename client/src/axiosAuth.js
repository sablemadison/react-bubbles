import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });                                           //a token is returned after log in
};


const login = () => {
    axios.post('endpoint/endpoint', userCredentials) //change endpoint
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard');
      }
}
