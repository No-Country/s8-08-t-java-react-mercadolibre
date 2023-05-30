import { useState } from 'react';
import chatbot from "../../assets/img/chatbot.png";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { AiFillCloseCircle } from "react-icons/ai";


const systemMessage = {
    "role": "system",
    "content": import.meta.env.VITE_API_CONTENT
}

const ChatBot = () => {

    const [messages, setMessages] = useState([
        {
            message: "Hola! Soy MELI, tu asistente para guiarte en este proyecto de Mercado Libre, preguntame lo que quieras",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const showChat = () => {
        setIsPressed(true);
    }

    const hideChat = () => {
        setIsPressed(false);
    }

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message }
        });


        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,  // The system message DEFINES the logic of our chatGPT
                ...apiMessages, // The messages from our chat with ChatGPT
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + import.meta.env.VITE_API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]);
                setIsTyping(false);
            });
    }

    return (
        <div>
            {
                isPressed ?
                    <div className="fixed h-[400px] w-[348px] right-5 bottom-10 z-40">

                        <div className='bg-[#fff] flex justify-end'>
                            <div className='p-2'>
                                <AiFillCloseCircle className="text-[20px] text-[#e40101] cursor-pointer" onClick={hideChat} />
                            </div>
                        </div>

                        <MainContainer>
                            <ChatContainer>
                                <MessageList
                                    scrollBehavior="smooth"
                                    typingIndicator={isTyping ? <TypingIndicator content="MELI está escribiendo" /> : null}
                                >
                                    {messages.map((message, i) => {
                                        console.log(message)
                                        return <Message key={i} model={message} />
                                    })}
                                </MessageList>
                                <MessageInput placeholder="Escribe tu mensaje" onSend={handleSend} attachButton={false}
                                    className='bg-white text-red'
                                    />
                            </ChatContainer>
                        </MainContainer>
                    </div>
                    :
                    <div className="fixed right-5 bottom-5 z-40">
                        <img src={chatbot} alt="Robot amarillo" className="w-[100px] h-[100px] cursor-pointer"
                            onClick={showChat} />
                    </div>
            }
        </div>
    )
}

export default ChatBot;