![Prometheus](https://github.com/naveteam/prometheus/blob/assets/header.png?raw=true)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center">Repositório de hooks da Nave.rs</p>

![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)
[![NPM](https://img.shields.io/npm/v/@naveteam/prometheus.svg)](https://www.npmjs.com/package/@naveteam/prometheus)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
![ci](https://github.com/naveteam/prometheus/workflows/ci/badge.svg)
[![All Contributors](https://img.shields.io/github/all-contributors/naveteam/prometheus?color=purple)](#contributors-)

## 🛠 Tecnologias utilizadas

Baseamos nosso desenvolvimento em:

- [React](https://reactjs.org/)
- [Storybook](https://github.com/storybooks/storybook)

## 🚀 Instalação

No terminal, execute

```shell
yarn add @naveteam/prometheus
// ou npm install @naveteam/prometheus
```

## 💡 Utilização

Com a lib instalada, o seguinte código já é o suficiente para iniciar o desenvolvimento da aplicação

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useDebounce } from '@naveteam/prometheus'

const App = () => {
  const [organicValue, setOrganicValue] = useState(null)
  const debouncedValue = useDebounce(organicValue)

  return (
    <div>
      <input onChange={e => setOrganicValue(e.target.value)} />
      <p>{debouncedValue}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

Você pode encontrar em nosso [Storybook](https://naveteam.github.io/prometheus) a documentação necessária de todos os hooks disponíveis no projeto.

## 🤝 Contribuição

Sinta-se livre para contribuir com o projeto, criando novos hooks, abrindo PRs para ajustar bugs ou mesmo levantando dúvidas, sugestões ou pedidos de ajustes através de issues. Para contribuir com nosso projeto, por favor siga nosso guia de [CONTRIBUTING](CONTRIBUTING.md).

## 📚 Links úteis

- [NPM](https://www.npmjs.com/package/@naveteam/prometheus): Acesso ao pacote NPM do projeto
- [Github](https://github.com/naveteam/prometheus): Repositório da lib
- [Storybook](https://naveteam.github.io/prometheus): Página com o projeto mais atualizado para referência

## Contribuidores ✨

Obrigado a essas maravilhosas pessoas que contribuíram de alguma maneira para o desenvolvimento da lib ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://bittencourt.dev"><img src="https://avatars1.githubusercontent.com/u/25224459?v=4" width="100px;" alt=""/><br /><sub><b>Eduardo Bittencourt</b></sub></a><br /><a href="https://github.com/naveteam/prometheus/commits?author=eduardobittencourt" title="Code">💻</a> <a href="#ideas-eduardobittencourt" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-eduardobittencourt" title="Maintenance">🚧</a> <a href="https://github.com/naveteam/prometheus/pulls?q=is%3Apr+reviewed-by%3Aeduardobittencourt" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/naveteam/prometheus/issues?q=author%3Aeduardobittencourt" title="Bug reports">🐛</a> <a href="https://github.com/naveteam/prometheus/commits?author=eduardobittencourt" title="Documentation">📖</a> <a href="#example-eduardobittencourt" title="Examples">💡</a> <a href="#infra-eduardobittencourt" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

Esse projeto segue a especificação de [all-contributors](https://github.com/all-contributors/all-contributors). Qualquer tipo de contribuição será bem-vinda!

## Licença

MIT © [Nave Team](https://github.com/naveteam)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!