import React from 'react'

export const Cards = ({ name, email }) => (
  <div style={{ padding: '20px', border: '1px solid rgba(100,100,100,0.5)', margin: "10px" }}>
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
)
