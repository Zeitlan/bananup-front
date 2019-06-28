import appConfig from '../../app-config'

export default (object) => {
  return {
    getVideoComments: async (id) => {
      try {
        const request = await fetch(appConfig.apiUrl + '/videos/' + id + '/comments/')
        const json = await request.json()
        object.setState({ comments: json })
        return json
      }
      catch (error) {
        return {
          message: 'Erreur : ' + error.message
        }
      }
    },
    addVideoComment: async (id, text, videoTime) => {
      try {
        const { state: { key } } = object
        const request = await fetch(appConfig.apiUrl + '/videos/' + id + '/comments/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + key,
          },
          body: JSON.stringify({
            text,
            videoTime,
          })
        })
        const json = await request.json()
        const status = request.status
        if (status !== 200) {
          console.log(json)
          object.setState({ comments: [json, ...object.state.comments] })
          return json
        }
      }
      catch (error) {
        return {
          message: 'Erreur : ' + error.message
        }
      }
      return undefined
    },
    addVote: async (videoId, commentId, value) => {
      try {
        const { state: { key } } = object
        const vote = value < 0 ? 'downvote' : 'upvote'
        const request = await fetch(appConfig.apiUrl
          + '/videos/'
          + videoId
          + '/comments/'
          + commentId
          + '/'
          + vote
          + '/', {
            method: 'POST',
            headers: {
              'Authorization': 'Token ' + key,
            }
          })
        const json = await request.json()
        const status = request.status
        if (status === 200) {
          object.setState({comments: object.state.comments.map(
            (comment) => comment.id === json.id ? {...json} : comment
          )})
        }
      }
    catch (error) {
      return {
        message: 'Erreur : ' + error.message
      }
    }
    return undefined
    }
  }
}