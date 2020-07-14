# CONTRIBUTING

Nós adoramos pull requests, mas para contribuir com o projeto você precisa seguir algumas premissas para garantir que seu código esteja de acordo com o restante do projeto.

## ✅ Requisitos

Os únicos requisitos necessários para executar o projeto são o [nodejs](https://nodejs.org/) e um editor de texto a sua escolha (nós recomendamos o [Visual Studio Code](https://code.visualstudio.com/))

## ⚙️ Configuração Inicial

Recomendamos o uso do Visual Studio Code pois ele oferece diversas extensões que facilitam a padronização do código para seguir os o _code style_ [standard](https://standardjs.com/). Dentre as extensões, recomendamos o uso de:

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 🚧 Desenvolvimento

Após instalação e configuração de seu ambiente, tudo que você têm a fazer é seguir essas etapas:

```shell
// clonar o repositório
git clone git@github.com:naveteam/prometheus.git

// acessar a pasta do projeto
cd prometheus

// instalar as dependências
yarn // ou npm install

// executar o projeto
yarn start // ou npm run start 
```

Isso irá abrir o playground do StoryBook, onde todos os nossos hooks serão desenvolvidos.

Para executar novas tasks, você pode selecionar qualquer card da coluna `To Do` presente no nosso [roadmap](https://github.com/naveteam/saturn-system/projects/2).

## 📁 Estrutura de pastas

O core do projeto está presente na pasta `src`. Na maioria dos casos ela será a única pasta que você precisará mexer. Dentro dela, existem as supastas:

- 📁**hooks**: Nessa pasta estão presentes todos os hooks do projeto. O arquivo `index.js` deve exportar todos os hooks presentes nessa pasta.

- 📁**stories**: A pasta stories contêm os descritivos de cada hook previamente criado. Para cada hook dentro de `hooks`, deve existir um arquivo `.stories.mdx` com a descrição do hook. São esses stories que serão mostrados no StoryBook e que servirão de documentação para futuras utilizações dessa lib.

## 🛑 Considerações

Para que a execução de sua task seja feita da melhor maneira possível, algumas considerações devem ser seguidas a fim de manter o padrão necessário para aprovação e deploy do seu código. Podemos separar essas considerações em:

### 🔙 Antes de iniciar o desenvolvimento

- Certificar-se que seu repositório está atualizado e que todas as dependências estão instaladas e compatíveis com as versões descritas no `package.json`.
- Garantir que o `ESLint` e o `EditorConfig` estejam corretamente configurados afim de manter o padrão de código.
- Criar uma nova `branch` baseada na main mais atualizada para a criação do seu hook. Utilizar o prefixo `feat/<nome-do-hook>` para novos hooks e `fix/<resumo-do-bugfix>` para bugfixes.

### 🔛 Durante o desenvolvimento

- Manter o padrão de estrutura de pastas descrito acima.
- Manter o código limpo e organizado para fins de mantenabilidade, com declarações de variáveis e funções com nomes descritivos, e com eventuais funções muito extensas ou complexas com comentários sobre seu funcionamento.
- Utilizar `PropTypes` para definir todos os parâmetros que seu hook pode possuir.
- Documentar o hook no StoryBook através de `stories`. Nessa documentação deverão estar presentes todas as _props_ que seu hook pode receber, bem como descrições detalhadas de seu funcionamento e eventuais peculiaridades que ele possa ter.
- Revisar todo o código criado afim de procurar e remover eventuais `logs` utilizados durante o desenvolvimento e minimizar ao máximo códigos comentários (caso eventuais códigos comentados existam, informar o motivo do comentário existir).
- Utilizar o comando `yarn commit` para criar os commits durante o desenvolvimento. Esse comando é necessário para manter o padrão do [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional).

### 🔜 Após o desenvolvimento

- Abrir um `Pull Request` com sua branch seguindo um dos modelos de PR presentes no repositório. Descrever de maneira clara e objetiva seu PR e certificar-se que todo o checklist seja cumprido.
- Após um mínimo de 2 (dois) approves, mergear seu PR na `main` e testar em ambiente de produção se o comportamento de seu hook está de acordo com o esperado.
- Sentar, tomar um café e admirar seu hook recém criado disponível em produção. ☕️
