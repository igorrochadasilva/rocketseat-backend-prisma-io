# Prisma IO

## Primeiros passos com prisma

**Boas vindas**

**O que é o prisma?**

- Framework Prisma
- ORM object releation mapper que consegue pegar os objetos dentro da aplicação e converter pra uma forma que o BD consiga entender
- Basicamente um tradutor entre o backend e o BD
- Vem ganhando o mercado por causa dos produtos disponiveis, Client API se destaca.
- Com o prisma Client, ele possibilita a comunicação com BD e criação de banco, tabela e consultas dentro da aplicação
- https://www.prisma.io/docs/concepts/components/prisma-client
- Utilizando o migrations para converter todo o prisma schema para sql
- Prisma Studio é uma IDE parecida com o beekeper mas sem a necessidade de instalar, já que vem com o prisma.
- Data plataform, podendo utilizar o prisma sem sair do browser, podendo se conectar com o github

**Instalando extensão no**

- Prisma
- Prisma - Insider

**Configurando Prisma no projeto**

- Instalando prisma
- `npx prisma init` para inicialização do prisma
- Criando DB postgresql dockeeer
- docker run --name postgresprisma -p 5432:5432 -e POSTGRES_PASSWORD=admin -d postgres
- Passando DATABASE_URL para conexão com BD

**Apresentando o esqueleto do projeto**

**Conhecendo o Prisma Studio**

- `npx prisma studio` para inicialização do prisma studio
- Explorando as ferramentas do studio, filter, fields e models

**Conhecendo o Prisma Client**

- Responsavel por pegar a informação e fazer as manipulações, trasformar as informações em uma forma que O DB entenda

## Trabalhando com tabelas

**Criando tabela sem relacionamento**

- Criando tabela `Courses`
- Passando `@@map` para definir nome da tabela no DB
- Para criação de tabelas se usa o `Model`
- Definindo name como unico, utilizando o `unique`
- Passando ponto de interrogação no `description` para ser um atributo opcional

**Inserindo dados na tabela**

- Criando arquivo `server.ts` e criação de função main contendo criação de registro utilizando o `prisma.create`.

**Realizando buscas**

- Criado arquivo `findone` ao qual faz consulta de registros do banco de dados utilizando o prisma.

**Atualização d dados**

- Criado arquivo `update` para atualização de registros utilizando o `update` do prisma

## Relacionamento One to One

**Criar tabela com relacionamento um para um**

- Criando atributo unico que será `foreign key` entre a tabela `course` e `teachers` utilizando o `relation` do prisma
- Criando migration `npx prisma migrate dev`

**Inserir dados em tabela com relacionamento**

- Criado registro utilizando `create, where e connectOrCreate` para novo registro
- Criado `create_exist_teacher` para criar registro e associar `course` com `teacher` baseado no `id`
- Criado `create_no_exist_teacher` para criação de registro de `course` e `teacher`
- Criado `create_fk_teacher` para criação de registro vinculado a foreing key de `teacher`

**Buscar dados em tabela com relacionamento**

- Como fazer busca dentro da tabela e fazer retorno das informações com
- Criado `findRelation` utilizando `findMany` para busca de registros baseado nos professores

## Relacionamento One to Many

**Criar tabela com um para muitos**

- Criando tabela autor e livros, e referencia entre elas
- Gerado tabela `yarn prisma migrate dev`

**Inserir dados em tabla de um para muitos**

- Inserido registro com `create` do prisma
- Inserindo multiplos registros de livros para um mesmo autor utilizando `createMany`
- Inserindo livro baseado no autor que está atrelado "Mutio massa = D"

## Relacionamento Many to Many

**Criar tabela com relacionamento muitos para muitos**

- Criando tabela `courses_module` relacionada com as tabelas `courses` e `modules`

**Inserindo dados em tabela com relacionamento muito para muitos**

- Criado `create` para inserção de registro de curso baseado em id
- Criado `createManytoMany` para inserção de registro baseado no id de cuso e module
- Criado `createToZero` que faz inserção de registro que não tenha nem curso nem modules.

**Realizar busca em relacionamento muito para muitos**

- Criado `findByCourse` que irá buscar item do curso por id e trazer todos os modulos atrelados a esse curso
- Criado `findByRelation` que irá buscar cursos e modulos através dos relacionamentos do `courseModule`

**Remover item na tabela**

- Criado `delete` e passando id de item de tabela de relacionamento para deletar registro

## Filters

**Trabalhando com filtering e sorting**

- Utilizando o `findMany` para busca de cursos
- Passando o parametro `mode: insensitive` para filter cursos indenpende das palavras estarem maisculas ou minusculas
- Utilizando o parametro `OR` e `AND` para incrementar a busca de cursos.

**Trabalhando com pagination**

- Utilizando o `skip` e `take` para fazer paginação de um retorno de array.

**Trabalhando com queryRaw**

- Utilizando o `queryRaw` para utilizar `sql` para consultas
