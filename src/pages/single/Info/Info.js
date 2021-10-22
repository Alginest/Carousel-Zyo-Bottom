import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import Rating from '@mui/material/Rating'

const useStyles = makeStyles((theme) => ({
  aboutHero: {
    backgroundColor: 'white',
    height: '90%',
  },
}))

const Info = () => {
  const classes = useStyles()
  return (
    <Box className={classes.aboutHero}>
      <Container>
        <Typography variant='h4' gutterBottom>
          Active Wear
        </Typography>
        <Typography variant='h5' gutterBottom>
          $25.00
        </Typography>
        <div className={classes.rating}>
          <Rating value={4} max={5} className={classes.rating} />
          <Typography> | 36 Comments</Typography>
        </div>
        <Typography>
          Brand: <Typography component='span'> Easy Wear</Typography>
        </Typography>
        <Typography>
          Description:
          <Typography component='span'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse. Donec condimentum elementum convallis. Nunc sed orci a
            diam ultrices aliquet interdum quis nulla.
          </Typography>
        </Typography>
        <Typography>
          Avaliable Color:
          <Typography component='span'> White / Black</Typography>
          <div className='spec'>
            <Typography>
              Brand:
              <Typography component='span'>
                Lorem ipsum dolor sit Amet, consectetur Adipiscing elit,set Duis
                aute irure Ut enim ad minim Dolore magna aliqua Excepteur sint
              </Typography>
            </Typography>
          </div>
          <Typography>
            Size:
            <Typography component='span'></Typography>
          </Typography>
        </Typography>
      </Container>
    </Box>
  )
}

export default Info
