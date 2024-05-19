export const config = {
  SERVER_PORT: process.env.SERVER_PORT || 8080,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || 5435,
  DB_USERNAME: process.env.DB_USERNAME || 'bank',
  DB_PASSWORD: process.env.DB_PASSWORD || 'bank',
  DB_NAME: process.env.DB_NAME || 'bank',
  DB_SYNC: process.env.NODE_ENV !== 'production' || process.env.DB_SYNC || true,
};
