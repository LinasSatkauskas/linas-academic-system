"use client"
import { shallow, useBoundStore } from "@/store/useBoundStore"

export function MessageList() {
  const { messages } = useBoundStore(
    shallow((state) => ({ messages: state.messages }))
  )
  return (
    <ul className="text-sm grid gap-y-1 bg-green-400 p-2">
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  )
}
