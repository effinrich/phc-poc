FROM alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . ./
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist/apps/portal /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
