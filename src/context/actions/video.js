import appConfig from '../../app-config'

export default (object) => {
  return {
    getVideos: async () => {
      try {
        const request = await fetch(appConfig.apiUrl + '/videos/')
        const json = await request.json()
        const status = request.status
        if (status !== 200) {
          return json
        } else {
          object.setState({categories: json})
        }
      }
      catch(error) {
        return {
          message: 'Erreur : ' + error.message
        }
      }
      return undefined
    },
    getVideoInformation: async (id) => {
      try {
        const request = await fetch(appConfig.apiUrl + '/videos/' + id + '/')
        const json = await request.json()
        object.setState({videoId: id})
        return json
      }
      catch(error) {
        return {
          message: 'Erreur : ' + error.message
        }
      }
    },
  }
}