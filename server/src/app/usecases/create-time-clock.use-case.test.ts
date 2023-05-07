require('reflect-metadata')
const dotenv = require('dotenv');
dotenv.config();
import {Container} from 'typedi'
import { CreateTimeClockUseCase } from './create-time-clock.use-case'
import { testUtils } from '../../utils/teste-utils'


const useCase = Container.get(CreateTimeClockUseCase)

describe('CreateTimeClockUseCase', () => {
  test('GIVEN an user, its should be create a time clock without end time', async () => {
    const user = await testUtils.createUser()
    const startTime = new Date().toISOString()

    const response = await useCase.exec({
      userId: user.id,
      start: new Date().toISOString(),
    })

    /**
     * this data length exists because timestamp on 
     * hasura is different from toIsoString
     */
    const dataLength = 20
    expect(response.user_id).toBe(user.id);
    expect(response.start.slice(0, dataLength)).toBe(startTime.slice(0,dataLength));
    expect(response.end).toBeNull();
  })


 })