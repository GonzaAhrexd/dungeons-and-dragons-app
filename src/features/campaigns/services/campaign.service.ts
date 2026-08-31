import { instance } from '@/infrastructure/axios.config'

import type {
  CreateCampaignRequest,
  CreateCampaignResponse,
  GetCampaignByIdResponse,
  GetMyCampaignsResponse,
  SendInvitationRequest,
  SendInvitationResponse,
  EditCampaignRequest,
  EditCampaignResponse,
  EditCampaignParams,
  GetInvitationResponse,
  AcceptInvitationResponse,
  AcceptInvitationParams,
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

  static getInvitations = async (): Promise<GetInvitationResponse[]> => {
    try {
      const response = await instance.get(`${INVITATIONS_CONTROLLER}/me`)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static acceptInvitation = async (
    params: AcceptInvitationParams,
  ): Promise<AcceptInvitationResponse> => {
    try {
      const response = await instance.put(
        `${INVITATIONS_CONTROLLER}/accept/${params.id}`,
      )
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static editCampaign = async (
    params: EditCampaignParams,
    data: EditCampaignRequest,
  ): Promise<EditCampaignResponse> => {
    try {
      const response = await instance.patch(`${CONTROLLER}/${params.id}`, data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
