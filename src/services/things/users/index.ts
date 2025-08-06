import customService from '@/configs/common/service.config';
import { EndpointsThings } from '@/constants/endpoint';
import {
  TCreateUserParams,
  TCreateUserResponse,
  TGetAllUsersResponse,
  TGetSingleUserParams,
  TGetSingleUserResponse,
  TUpdateUserParams,
  TUpdateUserResponse,
} from '@/types/api/things';

export default class UsersAPI {
  getAllUsers(): Promise<TGetAllUsersResponse[]> {
    return customService.base.get(EndpointsThings.GET_ALL_USERS);
  }
  getSingleUser(params: TGetSingleUserParams): Promise<TGetSingleUserResponse> {
    return customService.base.get(
      EndpointsThings.GET_SINGLE_USER.replace(':id', params || '')
    );
  }
  createUser(params: TCreateUserParams): Promise<TCreateUserResponse> {
    return customService.base.post(EndpointsThings.CREATE_USER, params.payload);
  }
  UpdateUser(params: TUpdateUserParams): Promise<TUpdateUserResponse> {
    return customService.base.put(
      EndpointsThings.UPDATE_USER.replace(':id', params.id),
      params.payload
    );
  }
}
