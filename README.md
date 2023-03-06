# Setup and dependancies
1. Clone the repository by typing `git clone https://github.com/angelware10110/kas-vyksta-tavo-mieste.git` in  console
2. Download [Postman](https://www.postman.com/)
3. Download [Node.js](https://nodejs.org/en/)
4. Install npm packages by typing `npm install` in console

# Usage
Type `npm run demon` in console to start the project

## Registration
1. Open [Postman](https://www.postman.com/)
2. Click **New** and select **HTTP Request**
3. Select the **POST** method
4. Type `http://localhost:6655/api/users/` in the request URL
5. Click **Body** below the request URL and select **raw**
6. On the right click **Text** and select **JSON**
7. In body paste the following text and replace the required fields:
```
{
    "email": "example@email.com",
    "name": "John Doe",
    "password": "your_password"
}
```
8. Click **Send**
9. Copy the string after **"token":** for later

## Login
1. Follow the same steps as **Registration** up to the 6th step
2. Replace the request URL with `http://localhost:6655/api/users/login`
3. In body paste the following text and replace the required fields:
```
{
    "email": "example@email.com",
    "password": "your_password"
}
```
4. Click **Send**
5. Copy the string after **"token":** for later

## Show all events
1. Open [Postman](https://www.postman.com/)
2. Click **New** and select **HTTP Request**
3. Select the **GET** method
4. Type `http://localhost:6655/api/events/` in the request URL

## Post an event
1. Follow the same steps as **Registration** up to the 6th step
2. Replace the request URL with `http://localhost:6655/api/events/`
3. In body paste the following text and replace the required fields:
```
{
    "host": "your_user_ID",
    "email": "example@email.com",
    "event_location": "your_event_location",
    "event_date": "your_event_date",
    "event_duration": "your_event_duration"
}
```
4. Click **Headers** left to the **Body**
5. Write `Authorization` in the **Key** field
6. Write `Bearer your_copied_token` in the **Value** field
7. Click **Send**

## Edit your event
1. Follow the same steps as **Registration** up to the 6th step
2. Instead of the **POST** method select the **PUT** method
2. Replace the request URL with `http://localhost:6655/api/events/`
3. Add your event ID to the request URL, example: `http://localhost:6655/api/events/6400bda8526d8000fd9d9656`
4. In body paste the following text and replace the required fields:
```
{
    "host": "your_user_ID",
    "email": "example@email.com",
    "event_location": "your_edited_event_location",
    "event_date": "your_edited_event_date",
    "event_duration": "your_edited_event_duration"
}
```
5. Click **Headers** left to the **Body**
6. Write `Authorization` in the **Key** field
7. Write `Bearer your_copied_token` in the **Value** field
8. Click **Send**

## Delete your event
1. Follow the same steps as **Registration** up to the 6th step
2. Instead of the **POST** method select the **DELETE** method
3. Replace the request URL with `http://localhost:6655/api/events/`
4. Add your event ID to the request URL, example: `http://localhost:6655/api/events/6400bda8526d8000fd9d9656`
5. Click **Headers** left to the **Body**
6. Write `Authorization` in the **Key** field
7. Write `Bearer your_copied_token` in the **Value** field
8. Click **Send**
