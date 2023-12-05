import assert from 'assert';
import pgPromise from "pg-promise";
import IngredientsService from '../service/ingredients.js';
import bcrypt from "bcrypt";
import dotenv from 'dotenv'
dotenv.config();

const pgp = pgPromise();

const connectionString = process.env.DATABASE_URL_TEST 

const db = pgp({ connectionString});

const ingredientsService= IngredientsService(db);

describe('ingredientsService', function () {
    this.timeout(8000);
    before(async function () {
        await db.query(`DELETE FROM table;`);
      });

  describe('Add User', function () {
    const saltRounds = 10;
    it('should add a user to the database', async function () {
        
    });
    });

    after(function () {
        db.$pool.end()
    });

    
});