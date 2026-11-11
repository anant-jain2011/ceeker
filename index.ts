import { mkdirSync } from "node:fs";
let args = Bun.argv.slice(2);

if (args[0] == "init") {
    if (args[1]) {
        mkdirSync(args[1], { recursive: true });
    } else {
        console.error("Error: Must provide a project name.");
        process.exit(1);
    }
}
