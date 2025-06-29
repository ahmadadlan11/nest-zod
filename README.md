# 💼 NestJS Interview Challenge

## 🧩 Problem Statement

You're building a backend system for a platform that manages **users**, their **cities**, and **regions**. The data for users, regions, and cities will be provided to you in JSON or CSV format. Your task is to create a clean and scalable NestJS backend that follows best practices.

---

## 🛠️ Tasks

1. **Set Up the Project**
   - Create a new NestJS project using the Nest CLI.
   - Set up TypeORM or Prisma (choose one).
   - Use PostgreSQL (or SQLite for simplicity) as the database.

2. **Create Entity Modules**
   - `User` module: Users should have fields like `id`, `name`, `email`, `region`, and `city`.
   - `City` module: Cities belong to regions.
   - `Region` module: A region can contain multiple cities.
   - Define appropriate relationships between these entities (e.g., OneToMany, ManyToOne).

3. **Implement RESTful APIs**
   - CRUD for each module (`/users`, `/regions`, `/cities`).
   - Include filtering and pagination where applicable (especially for listing users and cities).

4. **Data Seeding**
   - You will be given files with the data for users, cities, and regions.
   - Write a script or service to seed the database from these files.
   - Ensure that relational integrity is maintained (e.g., users are assigned valid city/region IDs).

5. **Validation & Error Handling**
   - Add proper validation (e.g., DTOs with `class-validator`) on all input data.
   - Handle common errors (e.g., duplicate entries, not found, bad requests).

6. **Bonus Points (Optional but Appreciated)**
   - Add authentication for users (basic JWT login is enough).
   - Add Swagger documentation for the API.
   - Use Docker for containerized setup.
   - Add tests for at least one module (unit or e2e using Jest).

---

## 📂 Provided Files

You will receive the following:
- `users.json`
- `cities.json`
- `regions.json`

Use these for your database seed logic.

---

## ✅ What We're Looking For

- Clear and scalable project structure
- Code readability and proper use of NestJS conventions
- Correct use of relationships between entities
- Proper API design and error handling
- Optional features and documentation are a plus!


🌟 Bonus Challenge (Extra Points):

A file named users.json in data folder contains a list of usernames.

When a client (e.g., browser or mobile app) queries the server for users, your API should return:

The list of users.

The corresponding cities whose names start with the same first letter as the username.

This operation must be highly optimized and performant.
