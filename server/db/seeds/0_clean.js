export const seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Comments')
    .del()
    .then(() => knex('Posts').del())
}
