import { createServer } from "vite";

async function startDev() {
  const server = await createServer({
    server: {
      host: "0.0.0.0",
      port: 5000,
    },
  });

  await server.listen();
  console.log(`Static site running at http://localhost:5000`);
}

startDev().catch(console.error);
