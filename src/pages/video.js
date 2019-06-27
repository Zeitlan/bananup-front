/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import YoutubePlayer from '../components/video-player/youtube-player'
import Comments from '../components/feedbacks/commentary/commentaries'
import AddComment from '../components/feedbacks/commentary/add-commentary'


const comments = [
  {
    id:1,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Curabitur placerat ante nec erat hendrerit, sit amet rutrum tortor ultrices.
           Donec efficitur justo sed gravida scelerisque. Nullam sed semper mi.
           Nunc dapibus viverra magna eget aliquam. Curabitur malesuada elit consectetur mauris lacinia efficitur.
           Sed venenatis, ipsum nec malesuada ornare, est dui ultricies metus, eu efficitur nibh dolor vitae neque.
           Suspendisse molestie sapien ipsum, id ultrices magna fermentum vitae. Cras ullamcorper laoreet neque a tristique.
           Phasellus vel condimentum nibh, at ornare arcu. Morbi fermentum diam consequat nisl gravida, non laoreet erat lacinia.
           Duis maximus vulputate ex sit amet consectetur. Morbi dignissim tortor vehicula, dictum tellus non, commodo neque.
           Quisque libero nunc, lacinia id ex eu, efficitur ultrices est. Maecenas euismod leo sed sem accumsan, ac tristique odio placerat.
           Cras id egestas arcu.`,
    author: {
      username: 'xPeke'
    }
  },
  {
    id:2,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    author: {
      username: 'Lulu'
    }
  },
  {
    id:3,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ante nec erat hendrerit, sit amet rutrum tortor ultrices. Donec efficitur justo sed gravida scelerisque. Nullam sed semper mi. Nunc dapibus viverra magna eget aliquam. Curabitur malesuada elit consectetur mauris lacinia efficitur. Sed venenatis, ipsum nec malesuada ornare, est dui ultricies metus, eu efficitur nibh dolor vitae neque. Suspendisse molestie sapien ipsum, id ultrices magna fermentum vitae. Cras ullamcorper laoreet neque a tristique. Phasellus vel condimentum nibh, at ornare arcu. Morbi fermentum diam consequat nisl gravida, non laoreet erat lacinia. Duis maximus vulputate ex sit amet consectetur. Morbi dignissim tortor vehicula, dictum tellus non, commodo neque. Quisque libero nunc, lacinia id ex eu, efficitur ultrices est. Maecenas euismod leo sed sem accumsan, ac tristique odio placerat. Cras id egestas arcu.`,
    author: {
      username: 'Mixea'
    }
  }
]

const useStyles = makeStyles(() => ({
  root: {
  },
  videoContainer: {
    position: 'relative',
    paddingTop: '56.25%!important',
  },
  video: {
    position: 'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
  },
  addComment: {
    width:'100%'
  }
}));

function Video(props) {
  const { videoId } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <div className={classes.videoContainer}>
                <YoutubePlayer className={classes.video} videoId={videoId} />
              </div>
            </Grid>
            <Grid item xs={12} lg={12}>
              <AddComment className={classes.addComment}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Comments comments={comments}/>
        </Grid>
      </Grid>
    </div>
  )
}

// PropTypes
Video.propTypes = {
  videoId: PropTypes.string
}

export default Video