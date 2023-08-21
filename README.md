# JangoReactProject

Тестирование API

## Frontend

Для получения зависимостей (рабочего окружения) из папка frontend запустить команду "npm i", перед этим установить пакетный менеджер npm или Node.js

Запуск сервера в режиме разработки:

> npm run dev

Порт по-умолчанию: 3000

## Backend

Для получения зависимостей (рабочего окружения) из папки backend запустить команду "python3 pip install -r requirements.txt", перед этим установить пакетный менеджер pip для python

Создание миграций:

> python3 manage.py makemigrations
>
> python3 manage.py migrate

Запуск сервера:

> python3 manage.py runserver

Порт по-умолчанию: 8000


## API
Регистрация пользователяx:
> register/
> 
методом POST отправляем запрос на создание учетной записи

Получение токенов:
> login/
>
POST методом отправляем данные пользователя в формате JSON
ответом получаем refresh, access token

Обновление access token:
> refresh/
> 
POST методом отправляем refresh token в формате ("refresh": "refresh_token")
В ответе получаем access token

Выход из профиля:
> logout/

Тестирование аутентификации:
> user/
> 
В Header пишем (key = Authorization, value = Bearer access_token )

если не аутентифицирован то будет присылать ошибку

Данные для теста:
>{
    "username":"sam_permissions",
    "password":"qwerty123123",
    "email":"vova_permissions@mail.ru"
}
