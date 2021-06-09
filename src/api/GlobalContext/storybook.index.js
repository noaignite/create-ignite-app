import { global as globalData } from 'api/mock'

const mockedGlobalContext = {}

export function useGlobal() {
  return globalData
}

export default mockedGlobalContext
