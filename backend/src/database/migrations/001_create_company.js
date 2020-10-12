exports.up = function(knex) {
    return knex.schema.createTable('companies', (table) => {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable().unique()
        table.string('password').notNullable()
        table.string('company').notNullable().unique()
        table.string('telephone').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('companies')
}