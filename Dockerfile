FROM node:24-alpine

WORKDIR /app

# Ставим зависимости
COPY package*.json ./
RUN npm ci

# Копируем код и собираем
COPY . .
RUN npm run build

EXPOSE 3000

# Запуск как указано в задании
CMD ["npm", "start"]