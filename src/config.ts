interface Config {
  macuseBinary: string;
  accessToken: string;
  debug: boolean;
  connectionTimeout: number;
}

export const config: Config = {
  macuseBinary:
    process.env.MACUSE_BINARY ||
    "/Applications/Macuse.app/Contents/MacOS/macuse",
  accessToken: process.env.ACCESS_TOKEN || "",
  debug: process.env.DEBUG === "true",
  connectionTimeout: parseInt(process.env.CONNECTION_TIMEOUT || "30000", 10),
};
