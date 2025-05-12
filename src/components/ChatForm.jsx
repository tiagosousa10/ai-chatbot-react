import React, { useRef } from 'react'

const ChatForm = ({setChatHistory}) => {

   const inputRef = useRef()
  
  const handleFormSubmit = (e) => {
   e.preventDefault();

   const userMessage = inputRef.current.value.trim();

   if(!userMessage) return;

   inputRef.current.value = '';

   // update chat history with user's message
   setChatHistory(oldMessages => [...oldMessages, {role: "user", text: userMessage}])

   // add a "Thinking ..." placeholder for the bot's message
   setTimeout(() => setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]),600 )

}


   return (
      <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
         <input ref={inputRef} type="text" placeholder='Message...' className='message-input' required />
         <button className='material-symbols-rounded'>
            arrow_upward
         </button>

      </form>
  )
}

export default ChatForm
