import appConfig from '../../app-config'

export default (object) => {
  return {
    getCategories: async () => {
      try {
        const request = await fetch(appConfig.apiUrl + '/categories/')
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
    getCategoryVideos: async (id) => {
      try {
        const request = await fetch(appConfig.apiUrl + '/categories/' + id + '/')
        const json = await request.json()
        return json
      }
      catch(error) {
        return {
          message: 'Erreur : ' + error.message
        }
      }
    }
  }
}