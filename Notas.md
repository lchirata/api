# Notas
Conexão com banco dados

### Conectar com banco de dados
Login no MySql
```bash
mysql -u ale -p
```

mysql -> CLI do MySlq
-u    -> indica login com usuario
ale   -> usuario
-p    -> indica login com senha



### Instalar Dependencias de Banco de dados
[Sequelize](https://sequelize.org/v3/docs/getting-started/)
https://sequelize.org/master/manual/getting-started.html

Instalar Sequelize
```bash
npm install sequelize
```

Instalar Sequelize CLI
```bash
npm install sequelize-cli --save-dev
```

Instalar MySql
```bash
npm install mysql2
```


### Criar Banco de dados
- Criar arquivos de configs (database/configs.js)
- Criar .sequelizerc
- importar configs para .sequelizerc
- Rodar npx sequelize db:create


### Criar tabela Produtos 

Cria arquivo de migration
```
npx sequelize migration:create --name=create-product
```

Roda arquivo de migration
```bash
npx sequelize db:migrate
```

---

Notas V2

Criando package.json <3
npm init


criar index.js


npm install express


npm i body-parser
Copiar código da doc

npm i nodemon
Add script de start e packege.json

Criar .gitignore