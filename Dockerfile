# Etapa base
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias e instalarlas
COPY package*.json ./
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa tu backend
EXPOSE 3000

# Comando para iniciar tu app
CMD ["node", "app.js"]
