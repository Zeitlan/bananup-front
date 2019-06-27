/* eslint-disable no-console */
export default (object) => {
    return {
        setYTPlayer: (reference) => {
          object.setState({ytPlayer: reference})
        },
        unsetYTPlayer: () => {
          object.setState({ytPlayer: undefined})
        }
    }
}
