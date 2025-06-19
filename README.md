# Country Explorer

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
