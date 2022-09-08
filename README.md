# Polling Server

Install Deps

```bash
npm install
```

Install Linters

```bash
# if there is no repository
git init

npm run prepare

# if pre-commit hooks is not executable
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

Copy Env

```bash
cp .env.example .env
```

Run

```bash
# development
NODE_ENV=development npm run dev

# production
NODE_ENV=production npm start
```
