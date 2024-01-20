const fs = require('fs/promises');

async function main() {
  const data = await fs.readFile('./config.json', 'utf8');
  const cfg = JSON.parse(data);
  console.log(cfg);

  await fs.writeFile('./out.json', JSON.stringify(cfg, null, 2));
}

main().catch(console.error);
