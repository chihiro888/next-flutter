import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material'

const Index = () => {
  // ** State
  const [toggle, setToggle] = useState(true)

  // ** Handler
  const handleClickButton = () => {
    // 토글 변경
    setToggle(!toggle)

    // Flutter에 Message 전송
    if (typeof window !== 'undefined' && window.Print) {
      window.Print.postMessage('Hello from Flutter!')
    }
  }

  const handleClickRedirect = () => {
    // Flutter에 Message 전송
    if (typeof window !== 'undefined' && window.Redirect) {
      window.Redirect.postMessage('w')
    }
  }

  // Ensure that handleClickAlert is defined only in the browser environment
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.handleClickAlert = () => {
        alert('hello')
      }
    }
  }, [])

  return (
    <>
      <Box>
        <Typography variant="h6">This is Index</Typography>
      </Box>
      <Box sx={{ mt: 5 }}>toggle : {toggle.toString()}</Box>
      <Box sx={{ mt: 1 }}>
        <Button variant="contained" onClick={handleClickButton}>
          Web Button
        </Button>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Button variant="contained" onClick={handleClickRedirect}>
          Redirect
        </Button>
      </Box>
    </>
  )
}

export default Index
