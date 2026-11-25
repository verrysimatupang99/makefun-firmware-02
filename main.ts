const LINE = 'Till deprecation do us part.';
const USAGE = 'Usage: node main.ts [--shout] [--help]\n';

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function showHelp(): void {
  process.stderr.write(USAGE);
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.includes('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
