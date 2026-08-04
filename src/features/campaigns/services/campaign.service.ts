import { instance } from '@/infrastructure/axios.config'

import type {
  CreateCampaignRequest,
  CreateCampaignResponse,
} from '../interfaces'

const CONTROLLER = 'campaigns'

export class CampaignService {
  static createCampaign = async (
    data: CreateCampaignRequest,
  ): Promise<CreateCampaignResponse> => {
    try {
      const response = await instance.post(`${CONTROLLER}`, data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
