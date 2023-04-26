/**
 * config.js
 */

const config = {
    SESSION: {
        SECRET: 'teporary_secret',
        // MySQL session store.
        STORAGE_HOST: process.env.SESSION_STORAGE_HOST,
        STORAGE_PORT: process.env.SESSION_STORAGE_PORT,
        STORAGE_USER: process.env.SESSION_STORAGE_USER,
        STORAGE_PASSWORD: process.env.SESSION_STORAGE_PASSWORD,
        STORAGE_DB: process.env.SESSION_STORAGE_DB
    }
};

module.exports = config;
