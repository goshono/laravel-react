FROM php:8.1-fpm-buster

ENV COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

RUN apt-get update && \
  # pdo_pgsqlをインストールするには、以下のような形で apt-get に libpq-dev を追加
  apt-get -y install --no-install-recommends git unzip libzip-dev libicu-dev libonig-dev libpq-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  # pdo_mysqlの代わりにpdo_pgsqlをインストール
  docker-php-ext-install intl pdo_pgsql zip bcmath 

COPY ./php.ini /usr/local/etc/php/php.ini

WORKDIR /data