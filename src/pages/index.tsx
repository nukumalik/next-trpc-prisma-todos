/* eslint-disable react-hooks/exhaustive-deps */
import {useRouter} from 'next/router'
import React, {useEffect} from 'react'

const IndexPage = () => {
  const [text, setText] = React.useState('')
  const router = useRouter()

  useEffect(() => {
    const tmp = '.bro'

    if (text !== tmp) {
      setTimeout(() => {
        setText(text + tmp[text.length])
      }, 400)
    } else {
      setTimeout(() => {
        router.push('/todos')
      }, 1000)
    }
  }, [text])

  return (
    <div className="min-vw-100 min-vh-100 d-flex align-items-center justify-content-center bg-primary">
      <h1 className="fw-bolder">
        <span className="text-white">Welcome</span>
        <span className="text-info">{text}</span>
        <span className="text-info">_</span>
      </h1>
    </div>
  )
}

export default IndexPage
