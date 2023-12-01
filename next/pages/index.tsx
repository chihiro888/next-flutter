import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Box, Typography, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from '@/store/count/action'
import { useRouter } from 'next/router'

const Index = () => {
  // ** Hooks
  const router = useRouter()

  // ** Redux
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

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

  const handleClickRedirectApp = () => {
    // Flutter에 Message 전송
    if (typeof window !== 'undefined' && window.Redirect) {
      window.Redirect.postMessage('w')
    }
  }

  const handleClickRedirectWeb = () => {
    router.push('/sample')
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
      <Box sx={{ mt: 5 }}>counter : {counter.value}</Box>
      <Box sx={{ mt: 1 }}>
        <Grid container>
          <Grid item>
            <Button
              onClick={() => {
                dispatch(incrementAction())
              }}
            >
              INC
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                dispatch(decrementAction())
              }}
            >
              DEC
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 5 }}>toggle : {toggle.toString()}</Box>
      <Box sx={{ mt: 1 }}>
        <Button variant="contained" onClick={handleClickButton}>
          Web Button
        </Button>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Button variant="contained" onClick={handleClickRedirectApp}>
          Redirect (App)
        </Button>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Button variant="contained" onClick={handleClickRedirectWeb}>
          Redirect (Web)
        </Button>
      </Box>
    </>
  )
}

export default Index
