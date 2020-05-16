const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    //--
    saveInRepository(data){
        return FighterRepository.create(data);
    }
    updateInRepository(id, data){
        return FighterRepository.update(id, data);
    }
    deleteFromRepository(id){
        return FighterRepository.delete(id);
    }
    getAllFromRepository(){
        return FighterRepository.getAll();
    }
    searchInRepository(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
    //--

}

module.exports = new FighterService();