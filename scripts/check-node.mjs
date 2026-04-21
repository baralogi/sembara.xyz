const major = Number.parseInt(process.versions.node.split(".")[0] ?? "", 10);

if (major !== 24) {
  console.error(
    `This project requires Node.js 24.x. Current version: ${process.versions.node}.`,
  );
  console.error("Run `nvm use 24` (or install Node 24) and try again.");
  process.exit(1);
}
