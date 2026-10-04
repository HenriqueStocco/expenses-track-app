// Validates a commit message against Conventional Commits.
// Used by .githooks/commit-msg: `bun scripts/check-commit-msg.ts <message-file>`.
const types = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'build',
  'ci',
  'chore',
  'revert',
] as const

const maxHeaderLength = 72
const header = new RegExp(
  `^(?:${types.join('|')})(?:\\([a-z0-9][a-z0-9-]*\\))?!?: \\S.*$`
)
// Messages created by git itself are accepted as they are.
const generated = /^(?:Merge |Revert "|fixup! |squash! |amend! )/

/** Returns the problems found; an empty list means the message is valid. */
export function validateCommitMessage(raw: string): string[] {
  const scissors = raw.indexOf('# ------------------------ >8')
  const lines = (scissors === -1 ? raw : raw.slice(0, scissors))
    .split('\n')
    .filter(line => !line.startsWith('#'))

  while (lines.length > 0 && lines[0]?.trim() === '') lines.shift()

  const first = lines[0]?.trimEnd() ?? ''

  if (first === '') return ['The commit message is empty.']
  if (generated.test(first)) return []

  const problems: string[] = []

  if (!header.test(first)) {
    problems.push(
      'The header must be `<type>(<optional scope>)!: <description>`, ' +
        `with type one of: ${types.join(', ')}.`
    )
  }
  if (first.length > maxHeaderLength) {
    problems.push(
      `The header has ${first.length} characters; the maximum is ${maxHeaderLength}.`
    )
  }
  if (first.endsWith('.')) {
    problems.push('The header must not end with a period.')
  }
  if (lines.length > 1 && lines[1]?.trim() !== '') {
    problems.push('Leave a blank line between the header and the body.')
  }
  return problems
}

if (import.meta.main) {
  const file = Bun.argv[2]

  if (!file) {
    console.error('Usage: bun scripts/check-commit-msg.ts <message-file>')
    process.exit(2)
  }

  const message = await Bun.file(file).text()
  const problems = validateCommitMessage(message)

  if (problems.length > 0) {
    console.error('✖ Invalid commit message (Conventional Commits):\n')

    for (const problem of problems) console.error(`  - ${problem}`)

    console.error(
      [
        '',
        `  Got: ${message.split('\n')[0]}`,
        '',
        '  Examples:',
        '    feat(dashboard): show the hourly chart',
        '    fix: ignore the empty line code',
        '    feat(api)!: rename the line query parameter',
        '',
        '  See https://www.conventionalcommits.org',
      ].join('\n')
    )
    process.exit(1)
  }
}
