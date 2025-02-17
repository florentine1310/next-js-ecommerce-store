### Next.js Ecommerce Shop Project for UpLeveled Full Stack Course

This is a [Next.js](https://nextjs.org) project done for the UpLeveled Full Stack Course to practice the development of a full stack application.

## Technologies

- Next.js
- Postgres
- Jest
- Playwright
- Fly.io

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Setup

If you don't have PostgreSQL installed yet, follow the instructions from the PostgreSQL step in [UpLeveled's System Setup Instructions](https://github.com/upleveled/system-setup/blob/master/readme.md).

Copy the `.env.example` file to a new file called `.env` (ignored from Git) and fill in the necessary information.

Then, connect to the built-in `postgres` database as administrator in order to create the database:

### Windows

If it asks for a password, use `postgres`.

```bash
psql -U postgres
```

### macOS

```bash
psql postgres
```

### Linux

```bash
sudo -u postgres psql
```

Once you have connected, run the following to create the database:

postgres=# CREATE DATABASE next_js_ecommerce_store_plantify;
CREATE DATABASE
postgres=# CREATE USER next_js_ecommerce_store_plantify WITH ENCRYPTED PASSWORD 'next_js_ecommerce_store_plantify';
CREATE ROLE
postgres=# GRANT ALL PRIVILEGES ON DATABASE next_js_ecommerce_store_plantify TO next_js_ecommerce_store_plantify;
GRANT
postgres=# \connect next_js_ecommerce_store_plantify
Sie sind jetzt verbunden mit der Datenbank »next_js_ecommerce_store_plantify« als Benutzer »FlorentineRamboeck«.
next_js_ecommerce_store_plantify=# CREATE SCHEMA next_js_ecommerce_store_plantify AUTHORIZATION next_js_ecommerce_store_plantify;
CREATE SCHEMA
next_js_ecommerce_store_plantify=#

Quit `psql` using the following command:

```bash
\q
```

On Linux, it is [best practice to create an operating system user for each database](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/configuring_and_using_database_servers/using-postgresql_configuring-and-using-database-servers#con_postgresql-users_using-postgresql), to ensure that the operating system user can only access the single database and no other system resources. A different password is needed on Linux because [passwords of operating system users cannot contain the user name](https://github.com/upleveled/system-setup/issues/74). First, generate a random password and copy it:

```bash
openssl rand -hex 16
```

Then create the user, using the database user name from the previous section above. When you are prompted to create a password for the user, paste in the generated password.

```bash
sudo adduser <user name>
```

Once you're ready to use the new user, reconnect using the following command.

**Windows and macOS:**

```bash
psql -U <user name> <database name>
```

**Linux:**

```bash
sudo -u <user name> psql -U <user name> <database name>

## Tests

## Deployment
```
