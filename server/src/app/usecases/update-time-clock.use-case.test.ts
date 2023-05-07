import 'reflect-metadata';
const dotenv = require('dotenv');
dotenv.config();
import { testUtils } from '../../utils/teste-utils';
import Container from 'typedi';
import { ErrorName } from '../../utils/errors';
import { faker } from '@faker-js/faker';
import { UpdateTimeClockUseCase } from './update-time-clock.use-case';

const useCase = Container.get(UpdateTimeClockUseCase);

describe('UpdateTimeClockUseCase', () => {
	it('should create an user time clock with 60 minutes between start and end', async () => {
		const oneHourInMs = 1000 * 3600;
		const now = new Date();
		const oneHourAgo = new Date(now.getTime() - oneHourInMs);
		const clockTime = await testUtils.createUserWithStartedTimeClock(oneHourAgo.toISOString());

		const response = await useCase.exec({
			id: clockTime.id,
			end: now.toISOString(),
		});

		const timeBetween = new Date(response.end).getTime() - new Date(response.start).getTime();
		expect(timeBetween).toBe(oneHourInMs);
	});

	it('should throw ERROR if difference between start and end are less than 1 min', async () => {
		const now = new Date();
		const lessThanOneMinuteAgo = new Date(now.getTime() - 3600);
		const clockTime = await testUtils.createUserWithStartedTimeClock(lessThanOneMinuteAgo.toISOString());

		try {
			await useCase.exec({
				id: clockTime.id,
				end: now.toISOString(),
			});
		} catch (err) {
			expect(err.name).toBe(ErrorName.JourneyCannotHasLessThanOneMinute);
		}
	});
	it('should throw ERROR if difference between start and end are bigger than 12 hours', async () => {
		const clockTime = await testUtils.createUserWithStartedTimeClock(faker.date.past().toISOString());

		try {
			await useCase.exec({
				id: clockTime.id,
				end: faker.date.future().toISOString(),
			});
		} catch (err) {
			expect(err.name).toBe(ErrorName.JourneyShouldntHaveMoreThan12HoursError);
		}
	});
	it('should throw ERROR if start time is bigger then end time', async () => {
		const clockTime = await testUtils.createUserWithStartedTimeClock(faker.date.future().toISOString());

		try {
			await useCase.exec({
				id: clockTime.id,
				end: faker.date.past().toISOString(),
			});
		} catch (err) {
			expect(err.name).toBe(ErrorName.StartOfJourneyShouldBeGreaterThanEnd);
		}
	});
});
