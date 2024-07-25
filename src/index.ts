import Aedes from "aedes";
import { createServer } from "aedes-server-factory";

const aedes = new Aedes();
const port = process.env.PORT || 8888;

// Membuat server HTTP dengan dukungan WebSocket
const httpServer = createServer(aedes, { ws: true });

// Menjalankan server
httpServer.listen(port, () => {
  console.log(`WebSocket server listening on port ${port}`);
});
