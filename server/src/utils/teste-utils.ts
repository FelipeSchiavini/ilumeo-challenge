import { faker } from "@faker-js/faker";
import { CreateUserMutation } from "../app/graphql/create-user.mutation";
import { hasuraClient, hasuraHeaderConfig } from "../libs/hasura";
import Container from "typedi";
import { CreateTimeClockUseCase } from "../app/usecases/create-time-clock.use-case";
import { generateId } from "./utils";


const createUser = async (name?: string) =>{

  const { data } = await hasuraClient.mutate({
    mutation: CreateUserMutation,
    variables: { name: name || faker.name.firstName(), id: generateId() },
    ...hasuraHeaderConfig
  });

  return data.insert_user.returning[0];
}

const createUserWithStartedTimeClock =async (start?: string) => {
  const user = await createUser();
  const timeClock = await Container.get(CreateTimeClockUseCase).exec({
    userId: user.id,
    start: start || new Date().toISOString()
  })

  return timeClock
}


const testUtils = {
  createUser,
  createUserWithStartedTimeClock
}

export { 
  testUtils
}



