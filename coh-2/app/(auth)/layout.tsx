import { ReactNode } from "react"

// Wrap the content of the layout in the children component
// (auth) will display in the route

export default function({ children }: {
  children: ReactNode
}) {
  return (
    <div>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  )
}