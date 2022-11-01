import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Sidebar, Videos} from './index'
import { fetchFromApi } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then(data => setVideos(data.items))
   
  }, [selectedCategory])
  // console.log(videos,"selectedCategory");
  
  return (
    <Stack sx={{ flexDirection: {xs: "column", md: "row"}}}>
      <Box sx={{ height: {xs: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px:{ xs: 0, md: 1}}}>
          <Sidebar 
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          />

        <Typography className='copyright' variant='body2' sx={{ mt:1.5, color: '#fff'}}>
          Copyright 2022 YouTube Platform

        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
           {selectedCategory} <span style={{ color: '#F31503'}}>videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed