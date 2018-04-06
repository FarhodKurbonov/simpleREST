export interface IConfig {
    port: number;
    prettyLog: boolean;
    dbUrl: string
    logColor: boolean
}

const config = {
    port: process.env.NODE_PORT || 3000,
    prettyLog: process.env.NODE_ENV == 'development',
    dbUrl: "mongodb://localhost:27017/demodb",
    logColor: true
};


export { config };