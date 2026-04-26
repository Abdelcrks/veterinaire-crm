# Vétérinaire CRM

Application de gestion clients pour cabinet vétérinaire.

## Stack technique

**Backend** : NestJS · Prisma · PostgreSQL  
**Frontend** : Next.js 16 · TypeScript · Tailwind CSS

## Prérequis

- Node.js 20+
- pnpm
- [Prisma CLI](https://www.prisma.io/docs)

## Installation

### 1. Cloner le repo

```bash
git clone https://github.com/Abdelcrks/veterinaire-crm.git
cd veterinaire-crm
```

### 2. Backend

```bash
cd backend
pnpm install
```

Créer un fichier `.env` à partir de l'exemple :

```bash
cp .env.example .env
```

Renseigner la `DATABASE_URL` dans `.env`.

Lancer le serveur Prisma local :

```bash
pnpm prisma dev
```

Appliquer les migrations :

```bash
npx prisma migrate deploy
```

Lancer le backend :

```bash
pnpm start:dev
```

L'API est disponible sur `http://localhost:3000`.

### 3. Frontend

```bash
cd frontend
pnpm install
```

Créer un fichier `.env.local` :

```bash
echo 'NEXT_PUBLIC_BACKEND_URL=http://localhost:3000' > .env.local
```

Lancer le frontend :

```bash
pnpm dev
```

L'application est disponible sur `http://localhost:3001`.

## Endpoints API

| Méthode | Route | Description |
|---|---|---|
| GET | `/owners` | Liste des propriétaires |
| GET | `/owners/:id` | Détail d'un propriétaire |
| POST | `/owners` | Créer un propriétaire |
| PATCH | `/owners/:id` | Modifier un propriétaire |
| DELETE | `/owners/:id` | Supprimer un propriétaire |
| GET | `/animals` | Liste des animaux |
| GET | `/animals/:id` | Détail d'un animal |
| POST | `/animals` | Créer un animal |
| PATCH | `/animals/:id` | Modifier un animal |
| DELETE | `/animals/:id` | Supprimer un animal |