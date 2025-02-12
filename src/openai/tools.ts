import type OpenAI from 'openai'

const test = (input: any) => 'test tool'

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments),
  }
  switch (toolCall.function.name) {
    case 'generate_image':
      const image = await test(input)
      return image

    case 'dad_joke':
      return test(input)

    case 'reddit':
      return test(input)

    default:
      throw new Error(`Unknown tool: ${toolCall.function.name}`)
  }
}
