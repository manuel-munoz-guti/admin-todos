# Getting Started

## Development
Steps for running the app locally

1. Setting and running up the db
```
docker compose up -d
```
2. Rename .env.template to .env
3. Replace environmental variables inside .env with correct values.
4. Run the command ```npm install```
5. Run the project with: ```npm run dev```
6. Execute the following commands:
```

npx prisma migrate dev
npx prisma generate

```
7. Navigate to [this enpoint](localhost:3000/api/seed) to force the db seed process

## Nota: Usuario por defecto
__usuario:__ test1@google.com
__password:__ 123456

### Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
