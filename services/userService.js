const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    //! ADD verification

    //--
    saveInRepository(data){
        return UserRepository.create(data);
    }
    updateInRepository(id, data){
        return UserRepository.update(id, data);
    }
    deleteFromRepository(id){
        return UserRepository.delete(id);
    }
    getAllFromRepository(){
        return UserRepository.getAll();
    }
    //--

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();