import axios from 'axios'
import logger from '../../logger'

interface DistanceQuery {
  from: string
  to: string
  apiKey: string
}

interface Leg {
  distance: {
    text: string
    value: number
  }
  end_location: {
    lat: number
    lng: number
  }
  start_location: {
    lat: number
    lng: number
  }
}

export default {
  Query: {
    getDistance: async (_: any, args: DistanceQuery) => {
      try {
        const { from, to, apiKey } = args
        const formattedFrom = from.replace(/ /g, '+')
        const formattedTo = to.replace(/ /g, '+')
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${formattedFrom}&destination=${formattedTo}&key=${apiKey}`
        const { data: output } = await axios.get(url)
        const { routes } = output
        const {
          distance,
          end_location: end,
          start_location: start
        } = routes[0].legs[0] as Leg

        return {
          distance: distance.value,
          text: distance.text,
          end: {
            latitude: end.lat,
            longitude: end.lng
          },
          start: {
            latitude: start.lat,
            longitude: start.lng
          }
        }
      } catch (error) {
        logger.error(error)
        throw error
      }
    }
  }
}
