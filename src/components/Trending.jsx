import { Grid, SpeedDialIcon, Stack, StepIcon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CodeIcon from '@mui/icons-material/Code';
import React from 'react'
import data from "..//data"
const Trending = () => {
console.log(data)

  return (
    <Stack gap={0} padding={0} sx={{
        boxSizing:"border-box"  ,maxHeight:"800px",}} border={"1px solid blue"}>
        <Stack flexDirection={"row"} alignItems="center" justifyItems={"center"} >
            <Box><CodeIcon/></Box>
            <Typography>trending today</Typography>
        </Stack>
        <Grid container>
  
        </Grid>
    </Stack>
  )
}

export default Trending