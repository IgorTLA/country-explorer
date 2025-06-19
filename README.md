# Country Explorer
## Sobre a Aplicação

O **Country Explorer** é uma aplicação web desenvolvida em Next.js que permite aos usuários explorar informações sobre países do mundo. A aplicação oferece funcionalidades de busca, visualização de detalhes de países e gerenciamento de favoritos.

### Acesse o projeto

🌐 **Demo Online**: [https://countriexplorer.netlify.app/](https://countriexplorer.netlify.app/)

## Sumário

- [Instalação](#instalação)
- [Documentação](#documentação)

## Instalação

### Docker

A aplicação está configurada para rodar no docker.

Para iniciar em ambiente Linux/MacOs, execute o comando:

```
npm run makefile
```

Para iniciar em ambiente Windows, execute o comando:

```
npm run makefile-win
```

### Local

Para rodar localmente, precisamos primeiro instalar as dependências:

```
npm install
```

Após isso, criar o arquivo `.env` e configurar as variáveis de ambiente:

```
NEXT_PUBLIC_API_URL=your-api-url.com.br
```

### Makefile

Os arquivos executáveis makefile possuem passos que podem ser comentados para atender cada situação, como parar o container, remover o container, remover a imagem e rebuildar a imagem.

#### Parar o container

Para parar o container, execute o comando:

```
docker stop country-explorer-frontend-container
```

#### Remover o container

Caso queira remover o container, execute o comando:

```
docker rm -f country-explorer-frontend-container
```

#### Remover a imagem

Para remover a imagem, execute o comando:

```
docker rmi country-explorer-frontend
```

#### Rebuildar a imagem

Para rebuildar a imagem, execute o comando:

```
docker build -t country-explorer-frontend --no-cache .
```

#### Iniciar o container

Para iniciar o container, execute o comando:

```
docker run --name country-explorer-frontend-container -p 3000:3000 country-explorer-frontend
```

## Documentação

### Funcionalidades Principais

- **Listagem de Países**: Visualize todos os países disponíveis com informações básicas
- **Busca Inteligente**: Pesquise países por nome com debounce de 300ms
- **Detalhes do País**: Acesse informações detalhadas de cada país
- **Sistema de Favoritos**: Adicione e remova países dos seus favoritos
- **Persistência Local**: Seus favoritos são salvos no localStorage do navegador

### Tecnologias Utilizadas

- **Next.js 15.3.3**: Framework React com App Router
- **React 19**: Biblioteca para interface do usuário
- **TypeScript**: Tipagem estática para JavaScript
- **Sass**: Pré-processador CSS para estilização
- **Axios**: Cliente HTTP para requisições à API
- **Lucide React**: Biblioteca de ícones
- **Docker**: Containerização da aplicação

## Arquitetura da Aplicação

### Fluxo de Dados

1. **Busca de Países**: 
   - O usuário digita no campo de busca
   - O hook `useDebounce` aguarda 300ms após parar de digitar
   - A função `getCountries` é chamada com o termo de busca
   - Os dados são obtidos da API externa via Axios
   - Os países são exibidos em cards na interface

2. **Visualização de Detalhes**:
   - O usuário clica em um card de país
   - É redirecionado para `/country/[code]`
   - A função `getCountryByCode` busca dados detalhados do país
   - As informações são exibidas no componente `CountryDetail`

3. **Sistema de Favoritos**:
   - Utiliza Context API do React para gerenciamento de estado global
   - Os favoritos são persistidos no localStorage
   - Hook `useFavorites` fornece métodos para adicionar/remover favoritos
   - Estado é sincronizado automaticamente entre todas as páginas

### Componentes Principais

#### CountryList
- Exibe a lista de países em formato de cards
- Gerencia cliques para navegação e favoritos
- Mostra estado de loading e mensagens de erro

#### CountryDetail
- Apresenta informações detalhadas de um país específico
- Inclui bandeira, capital, região, população, área e idiomas

#### FavoriteList
- Lista todos os países favoritados pelo usuário
- Permite remoção de favoritos
- Exibe mensagem quando não há favoritos

#### Header
- Navegação principal da aplicação
- Links para Countries e Favorites

### Hooks Customizados

#### useCountryList
- Gerencia estado de loading, dados e erros para listagem de países
- Fornece função `fetchCountries` para buscar dados

#### useDebounce
- Implementa debounce para otimizar requisições de busca
- Aguarda 300ms após o usuário parar de digitar

#### useFavorites
- Gerencia estado global dos favoritos via Context API
- Fornece métodos para adicionar e remover favoritos
- Sincroniza com localStorage automaticamente

### Integração com API Externa

A aplicação consome dados de uma API externa configurada via variável de ambiente `NEXT_PUBLIC_API_URL`. As principais operações são:

- `GET /all` - Lista todos os países
- `GET /name/{name}` - Busca países por nome
- `GET /alpha/{code}` - Obtém país específico por código

### Estados da Aplicação

- **Loading**: Exibido durante carregamento de dados
- **Error**: Mostra mensagens de erro quando a API falha
- **Empty**: Indica quando não há resultados ou favoritos
- **Success**: Exibe dados quando tudo funciona corretamente

