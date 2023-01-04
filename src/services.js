const User = require('./model/user')

const createUser = async (userDetails) =>{
    return new Promise(async(resolve, reject) => {
        const user = new User(userDetails);

        try {
            const result = await user.saveAll();
            resolve(result)
        } catch (error) {
            reject(error)
        }
    
    })   
};

const getAllUsers = () => {
    return new Promise(async (resolve, reject)=> {
        try {
            const users = await User.filter({});
            resolve(users);
        } catch (error) {
            reject(error);
        }        
    })
}

module.exports = {
  createUser,
  getAllUsers,
};