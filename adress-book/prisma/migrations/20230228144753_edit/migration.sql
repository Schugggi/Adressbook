/*
  Warnings:

  - Made the column `email` on table `Contacts` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contacts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT
);
INSERT INTO "new_Contacts" ("description", "email", "id", "name", "number") SELECT "description", "email", "id", "name", "number" FROM "Contacts";
DROP TABLE "Contacts";
ALTER TABLE "new_Contacts" RENAME TO "Contacts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
