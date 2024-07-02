import cors from "@fastify/cors";
import Fastify, { FastifyInstance } from "fastify"

class App {
    public app: FastifyInstance;

    constructor() {
        this.app = Fastify();
        this.config();
    }

    private config(): void {
        this.app.register(cors);
    }

    public async start(port: number): Promise<void> {
        try {
            await this.app.listen({ port, host: '0.0.0.0.' });
            console.log(`Server running on PORT ${port}`);
        } catch (error) {
            this.app.log.error(error);
            process.exit(1);
        }
    }
}

export default App;