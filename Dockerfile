FROM fholzer/nginx-brotli:latest

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx-site.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/mysite

COPY build/ .
