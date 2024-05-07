import React from 'react'

export default function DashBoadLayout ({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
        {children}
    </div>
  )
}

