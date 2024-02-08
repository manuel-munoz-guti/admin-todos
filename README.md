# Getting Started

## Development
Steps for running the app locally

1. Setting and running up the db
```
docker compose up -d
```

2. Rename .env.template to .env

3. Replace environmental variables inside .env with correct values.

4. Run the project with: `npm run dev`

5. Navigate to [this enpoint](localhost:3000/api/seed) to force the db seed process

### Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
