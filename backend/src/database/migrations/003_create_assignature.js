exports.up = function(knex) {
    return knex.schema.createTable('assignatures', (table) => {
        table.uuid('id').primary()
        table.string('name').notNullable()
        table.foreign('client_id').references('id').inTable('clients')
        table.foreign('company_id').references('id').inTable('companies')
        table.decimal('price').notNullable()
        table.string('assignature_time').notNullable()
        table.timestamp('created_at').defaultTo(Date.now())
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('assignatures')
}