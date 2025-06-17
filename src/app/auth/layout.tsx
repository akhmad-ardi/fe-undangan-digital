import React from "react"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-[100vh] flex items-center">{children}</main>
  )
}