import { runAgent } from "@/openai/agent";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json()
  if (!body.message) {
    return new Response('Missing message property', {
      status: 400
    })
  }
  const userMessage = body.message

  console.log('userMessage')

  const response = await runAgent({
    userMessage
  })

  return new Response(JSON.stringify(response, null, 2))
}
