import { instance } from '@/infrastructure/axios.config'

import type {
  CreateCampaignRequest,
  CreateCampaignResponse,
  GetCampaignByIdResponse,
  GetMyCampaignsResponse,
  SendInvitationRequest,
  SendInvitationResponse,
} from '../interfaces'

const CONTROLLER = 'campaigns'
const INVITATIONS_CONTROLLER = 'invitations'

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

  static getMyCampaigns = async (): Promise<GetMyCampaignsResponse> => {
    try {
      const response = await instance.get(`${CONTROLLER}/me`)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static getCampaignById = async (
    campaignId: string,
  ): Promise<GetCampaignByIdResponse> => {
    try {
      const response = await instance.get(`${CONTROLLER}/${campaignId}`)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static sendInvitation = async (
    data: SendInvitationRequest,
  ): Promise<SendInvitationResponse> => {
    try {
      const response = await instance.post(
        `${INVITATIONS_CONTROLLER}/send-invitation`,
        data,
      )
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
