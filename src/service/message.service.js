const messageRepo=require('../repo/message.repo');

class MessageService{

async createMessage(message){
    try {
       return await messageRepo.createMessage(message);
    } catch (error) {
        throw new Error("Error creating message",error);
    }

}

}
module.exports=new MessageService();
