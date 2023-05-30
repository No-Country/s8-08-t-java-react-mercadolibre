import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import { AiFillCloseCircle } from "react-icons/ai";
import chatbot from "../../assets/img/chatbot.png";
import axios from "axios";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const systemMessage = {
  role: "system",
  content: import.meta.env.VITE_API_CONTENT
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      message:
        "Hola! Soy MELI, tu asistente para guiarte en este proyecto de Mercado Libre, preguntame lo que quieras",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const showChat = () => {
    setIsPressed(true);
  };

  const hideChat = () => {
    setIsPressed(false);
  };

  const handleSend = async message => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await sendMessageToAPI(newMessages);
  };

  const sendMessageToAPI = async chatMessages => {
    let apiMessages = chatMessages.map(messageObject => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages]
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        apiRequestBody,
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json"
          }
        }
      );
      const data = response.data;

      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: "ChatGPT"
        }
      ]);

      setIsTyping(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isPressed ? (
        <div className="fixed h-[400px] w-[348px] right-5 bottom-10 z-40">
          <div className="bg-[#fff] flex justify-end">
            <div className="p-2">
              <AiFillCloseCircle
                className="text-[20px] text-[#e40101] cursor-pointer"
                onClick={hideChat}
              />
            </div>
          </div>

          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? <TypingIndicator content="MELI está escribiendo" /> : null
                }
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Escribe tu mensaje"
                onSend={handleSend}
                attachButton={false}
                className="bg-white text-red"
              />
            </ChatContainer>
          </MainContainer>
        </div>
      ) : (
        <div className="fixed right-5 bottom-5 z-40">
          <img
            src={chatbot}
            alt="Robot amarillo"
            className="w-[100px] h-[100px] cursor-pointer"
            onClick={showChat}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;