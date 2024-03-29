# Use below nginx version
FROM nginx:stable-alpine

WORKDIR /var/www

# Copy the build folder of the react app
COPY ./dist/apps/portal /var/www
# Copy the ngnix configrations
COPY nginx.conf /etc/nginx/nginx.conf
# Expose it on port 80
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
