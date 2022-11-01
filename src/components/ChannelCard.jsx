import React from 'react'
import { Box,TypeAction, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constant'

const ChannelCard = ({channelDetail, marginTop}) => (
    <Box 
        sx={{boxShadow:'none',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width: {xs: '100%', md: '250px'},
        height: '326px',
        margin:'auto',
        marginTop
        
    }}
    >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ 
            display: 'flex', 
            flexDirection:'column', 
            justifyContent:'center',
            textAlign: 'center',
            color:'#fff'
            }}>
            <CardMedia  image={channelDetail?.snippet?.thumbnails?.medium?.url
                || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{width: {xs: '100%', md: '180px'}, height: '180px', borderRadius:'50%'}}
                />
            <Typography variant='h6'>
                {channelDetail?.snippet?.title}
                <CheckCircle  sx={{fontSize: 16, color: 'gray', ml:'5px'}}/>
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                    &nbsp; Subscribers
                </Typography>
            )}

        </CardContent>
    </Link>

    </Box>
)

export default ChannelCard