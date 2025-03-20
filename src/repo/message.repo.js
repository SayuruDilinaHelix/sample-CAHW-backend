const Message=require('../models/message.model')

class MessageRepo{

async createMessage(message){
    try {
       return Message.create(message);
    } catch (error) {
        throw new Error("Error creating message",error);
        
    }
}

}
module.exports=new MessageRepo();