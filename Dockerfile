# Etapa 1: Instala apenas dependências de produção
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile 

# Etapa 2: Constrói a aplicação
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .env.production .env.production
RUN npm run build

# Etapa 3: Imagem final mínima para rodar a aplicação
FROM node:22-alpine AS runner
WORKDIR /app

# Copia apenas arquivos essenciais para o runtime
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY .env.production .env.production


EXPOSE 3000

CMD ["npm", "start"]