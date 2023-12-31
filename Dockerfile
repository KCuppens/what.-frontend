FROM node:latest as builder

WORKDIR /app  

COPY package*.json ./

RUN npm install

COPY . .

ENV PATH=/node_modules/.bin:$PATH

RUN npm run build


FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d

EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]