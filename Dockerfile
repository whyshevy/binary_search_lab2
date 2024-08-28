FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY html/index.html /usr/share/nginx/html/
COPY ts/app.js /usr/share/nginx/html/ts/
COPY css/styles.css /usr/share/nginx/html/css/
EXPOSE 80
