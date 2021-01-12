class MessageService {
    sendMessage(reciever, textMessage) {
        /*...*/
    }
}

class VoiceMessageService extends MessageService {
    sendMessage(reciever, voiceMessage) {
        /*...*/
    }

    call(reciever) {
        /*...*/
    }
}

const messageService = new MessageService();
const voiceService = new VoiceMessageService();

messageService.sendMessage('vasya123', 'Hi!'); // OK!
voiceService.sendMessage('vasya123', 'Hi!'); // Error!


class VoiceMessageService {
    sendMessage(reciever, voiceMessage) {
        /*...*/
    }

    call(reciever) {
        /*...*/
    }
}
