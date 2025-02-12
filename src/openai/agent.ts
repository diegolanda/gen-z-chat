import { runLLM } from './llm'
import { z } from 'zod'
import { runTool } from './tools'
import { addMessages, getMessages, saveToolResponse } from './memory'

export const runAgent = async ({
  userMessage,
  tools = [],
}: {
  turns?: number
  userMessage: string
  tools?: { name: string; parameters: z.AnyZodObject }[]
}) => {
  await addMessages([
    {
      role: 'user',
      content: userMessage,
    },
  ])
  while (true) {
    const history = await getMessages()

    try {
      const response = await runLLM({
        messages: history,
        tools,
      })

      // TODO: add memory
      // await addMessages([response])

      if (response.content) {
        return [response]
        // TODO: from memory
        // return getMessages()
      }

      if (response.tool_calls) {
        const toolCall = response.tool_calls[0]

        const toolResponse = await runTool(toolCall, userMessage)
        await saveToolResponse(toolCall.id, toolResponse)
      }

    } catch (error: any) {
      console.error(error)
      if (error.status === 429) {
        return {
          role: 'assistant',
          error: true,
          message: `💸 Bruh, I'm broke. 💸 Ain't got enough credits to run this. Gotta secure the bag first.`
        }
      }

      return {
        role: 'assistant',
        error: true,
        message: '🚨 Uh-oh, bestie! Something sus just happened. 🚨'
      }
    }
  }
}
