import store from 'store'
const USER_KEY = 'user_key';


 const saveUser = (user) => {
    store.set(USER_KEY,user);
};

const getUser = () => {
    return store.get(USER_KEY) || {}
};

// const removeUser = () => {
//     store.remove(USER_KEY);
// }

const loginUser = {
    saveUser,
    getUser,
    // removeUser
}

export default loginUser