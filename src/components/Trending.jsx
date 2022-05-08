import { Grid, SpeedDialIcon, Stack, StepIcon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import data from "..//data"
const Trending = () => {
console.log(data)

  return (
    <Stack gap={1} padding={0} sx={{
        boxSizing:"border-box"  ,maxHeight:"800px",}} border={"1px solid blue"}>
        <Box>
            <SpeedDialIcon/>
            <Typography>trending today</Typography>
        </Box>
        <Grid container>
  
        </Grid>
    </Stack>
  )
}

export default Trending