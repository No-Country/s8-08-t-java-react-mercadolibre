import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import { IoMdClose } from "react-icons/io";
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
        "Hola! Soy MELI, tu asistente para guiarte en este proyecto de Mercado Libre, pregúntame lo que quieras",
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
        <div className="fixed h-[400px] w-[376px] right-5 bottom-16 z-40">
          <div className="bg-[#ffffff] flex items-center h-[48px] rounded-tl-md rounded-tr-md">
            <div className="pl-4 flex items-center gap-6">
              <img src={chatbot} alt="Icono de chatbot" className="w-[32px] h-[32px]" />
              <span className="text-base font-medium text-[#333333]">MELI</span>
            </div>
            <div className="pr-4 ml-auto">
              <IoMdClose className="text-[20px] text-[#4189E6] cursor-pointer" onClick={hideChat} />
            </div>
          </div>

          <MainContainer>
            <ChatContainer className="rounded-bl-md rounded-br-md bg-black">
              <MessageList
                scrollBehavior="smooth"
                style={{ backgroundColor: "#F5F5F5" }}
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator
                      content="MELI está escribiendo"
                      style={{ backgroundColor: "#F5F5F5" }}
                    />
                  ) : null
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
                style={{ backgroundColor: "#F5F5F5" }}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      ) : (
        <div className="fixed right-5 bottom-5 z-40">
          <img src={chatbot} alt="Robot amarillo" className="cursor-pointer" onClick={showChat} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
