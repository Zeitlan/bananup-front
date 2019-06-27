import appConfig from '../../app-config'

export default (object) => {
  return {
    sendSharedVideo: async (link, name, description, category) => {
        try {
          const { state: { key }} = object
          if (key) {
            const request = await fetch(appConfig.apiUrl + '/videos/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept' : 'application/json',
                  'Authorization': 'Token ' + key, 
              },
              body: JSON.stringify({
                link,
                name,
                description,
                category
              })
            })
            const json = await request.json()
            const status = request.status
            if (status !== 201) {
                return json
            }
          } 
          else {
            return {
              message: 'Erreur : Vous n\'avez pas les droits'
            }
          }
        }
        catch(error) {
          return {
            message: 'Erreur : ' + error.message
          }
        }
        return undefined
    },
  }
}