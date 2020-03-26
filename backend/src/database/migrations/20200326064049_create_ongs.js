
exports.up = function(knex) { //Método Up é o de criação da tabela
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();

  }
  );
};

exports.down = function(knex) { // Méotdo de se houver algum problema, como posso voltar atrás.No caso seja deletar o anterior.
  return knex.schema.dropTable('ongs');
};
