
exports.up = function(knex) { //Método Up é o de criação da tabela
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable;

        table.foreign('ong_id').references('id').inTable('ongs');  
    }
    );
  };
  
  exports.down = function(knex) { // Méotdo de se houver algum problema, como posso voltar atrás.No caso seja deletar o anterior.
    return knex.schema.dropTable('incidents');
  };
  