import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, Grid } from '@mui/material'
import { decrementAction, incrementAction } from '@/store/count/action'
import { useRouter } from 'next/router'

const Sample = () => {
  // ** Hooks
  const router = useRouter()

  // ** Redux
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  return (
    <>
      <h1>This is Sample</h1>

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
      <Box sx={{ mt: 5 }}>
        <Button
          variant="contained"
          onClick={() => {
            router.back()
          }}
        >
          Back (Web)
        </Button>
      </Box>
    </>
  )
}

export default Sample
