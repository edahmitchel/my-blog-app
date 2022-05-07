import { Grid, Stack, StepIcon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Trending = () => {

  return (
    <Stack gap={1} padding={3} sx={{
        boxSizing:"border-box"  ,maxHeight:"800px",}} border={"1px solid blue"}>
        <Box>
            <StepIcon/>
            <Typography>trending today</Typography>
        </Box>
        <Grid container>

        </Grid>
    </Stack>
  )
}

export default Trending