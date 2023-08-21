#STAGE 1
FROM node:lts AS build
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

#STAGE 2
FROM nginx:1.23.1-alpine
COPY --from=build /app/frontend/out /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]