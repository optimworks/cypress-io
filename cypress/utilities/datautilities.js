import { faker } from "@faker-js/faker"

export function getContactInfo() {
  const firstName = faker.word.noun()
  const lastName = faker.word.noun()
  const zipcode = faker.number.int()
  const contactInfoArray = [firstName, lastName, zipcode]
  return contactInfoArray
}
