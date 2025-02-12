'use client'
import { useState, useEffect } from "react";

import { Input, Divider, Button, Spacer, ScrollShadow } from "@heroui/react"
import Markdown from "react-markdown";

const useChat = () => {
  const [message, setMessage] = useState<string | null>(null)

  const sendMessage = async (text: string) => {
    const response = await fetch('/api/agent', {
      method: 'POST',
      body: JSON.stringify({
        message: text
      })
    })

    const data = await response.json()

    setMessage(data[0].content)
  }

  return {
    message,
    sendMessage
  }
}

export const Chat = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText]  = useState('')
  const { message, sendMessage } = useChat()

  const callAgent = () => {
    if (text.trim() === '') {
      return
    }
    setIsLoading(!isLoading)
    sendMessage(text)
  }

  useEffect(() => {
    setText('')
    setIsLoading(false)
  }, [message])

  

  return (
    <>
      <ScrollShadow className="w-[300px] h-[250px]">
        <Markdown>
          {message}
        </Markdown>
      </ScrollShadow>
      <Spacer y={2}/>
      <Divider />
      <Spacer y={2}/>
      <Input
        className="max-w-xs"
        label="Message"
        placeholder="type your message..."
        type="mtext"
        variant="bordered"
        defaultValue={text}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Spacer y={2}/>
      <Button isLoading={isLoading} onPress={callAgent}>
        {isLoading ? 'Thinking...' : 'Send'}
      </Button>
    </>
  )
}